import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./AuthSidebar.css";
import "./App.css";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

const AuthSidebar = ({ isOpen, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            {/* Overlay */}
            <div
                className={`overlay ${isOpen ? "show" : ""}`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <div style={{
                    width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"
                    , marginTop: "10px", marginBottom: "30px"
                }}>
                    <p className="LightFontBold">Sign in</p>
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", cursor:"pointer" }}>
                        <p className="LightFontBold">Close</p>
                        <IoClose size={24} onClick={onClose} color="black" />
                    </div>
                </div>

                <div className="divider" />

                <div style={{ paddingLeft:"60px", display: "flex", flexDirection: "column", gap: "30px" }}>
                    <div style={{display:"flex", flexDirection:"column"}}>
                        <p className="LightFont" style={{ color: "black" }}>
                            Username or email address <span style={{ color: "red" }}>*</span>
                        </p>
                        <input
                            type="text"
                            style={{
                                width: "350px",
                                height: "40px",
                                backgroundColor: "#f6f6f6",
                                borderRadius: "2px",
                                border: 0,
                                padding: "8px 12px",
                                outline: "none",
                                marginTop: "5px"
                            }}
                        />
                    </div>

                    <div>
                        <p className="LightFont" style={{ color: "black" }}>
                            Password <span style={{ color: "red" }}>*</span>
                        </p>

                        <div
                            style={{
                                position: "relative",
                                width: "420px",
                                marginTop: "5px",
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <input
                                type={showPassword ? "text" : "password"}
                                style={{
                                    width: "350px",
                                    height: "40px",
                                    backgroundColor: "#f6f6f6",
                                    borderRadius: "2px",
                                    border: 0,
                                    padding: "0 50px 0 12px",
                                    outline: "none",
                                    fontSize: "16px",
                                    boxSizing: "border-box"
                                }}
                            />
                        </div>
                    </div>




                                                                 <Link to={`/MyAccount`}>
                                                            <button style={{
                        width: "300px",
                        height: "40px",
                        backgroundColor: "blue",
                        borderRadius: 0,
                        color: "white"
                    }}>LOG IN</button>
                                    </Link>

                    <div className="extra-options" style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                        <label>
                            <input
                                type="checkbox"
                                style={{
                                    transform: "scale(1.3)",
                                    cursor: "pointer",
                                    marginLeft: "5px"
                                }}
                            /> <span className="LightFont" style={{ color: "black" }}>Remember me</span>
                        </label>
                        <a href="#" className="LightFont" style={{ color: "#d35400" }}>Lost your password?</a>
                    </div>
                    <div className="divider" />

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <IoMdContact size={80} color="#f6f6f6" style={{ marginRight: "15px" }} onClick={() => setOpenAuth(true)} />
                        <p className="LightFontBold" style={{ color: "black",marginBottom: "25px" }}>No account yet?</p>
                        <a
                            href="#"
                            className="LightFontBold"
                            style={{
                                textDecoration: "underline",
                                textDecorationColor: "#d35400", // darker orange
                                textUnderlineOffset: "4px",
                                textDecorationThickness: "2px"
                            }}
                        >
                            CREATE AN ACCOUNT
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthSidebar;
