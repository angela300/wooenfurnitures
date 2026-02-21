import "./MyAccount.css";
import "./App.css";
import { useState } from "react";

export const MyAccount = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className="myaccount-page">

            {/* Hero Section */}
            <div className="myaccount-hero">
                <p className="LightFontBiggerMyAc">My account</p>
                <p className="LightFont" style={{ color: "white" }}>
                    Home <span>/</span>{" "}
                    <strong className="LightFontBigMyAc">My account</strong>
                </p>
            </div>

            {/* MAIN FLEX ROW */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "100px",
                    marginTop: "40px"
                }}
            >

                {/* LEFT SIDE */}
                {!showRegister ? (
                    /* LOGIN (DEFAULT LEFT) */
                    <div style={{ maxWidth: "800px" }} className="login">
                        <p className="LightFontVeryBig" style={{ color: "#448EE4", paddingLeft:"88px" }}>
                            Login
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "30px",alignItems:"center", width:"600px" }}>

                            <div style={{width:"420px"}}>
                                <p className="LightFont" style={{ color: "black" }}>
                                    Username or email address{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </p>
                                <input
                                    type="text"
                                    style={{
                                        width: "400px",
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

                            <div style={{ width:"420px"}}>
                                <p className="LightFont" style={{ color: "black" }}>
                                    Password <span style={{ color: "red" }}>*</span>
                                </p>

                                <div
                                    style={{
                                        position: "relative",
                                        width: "600px",
                                        marginTop: "5px"
                                    }}
                                >
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        style={{
                                                  width: "400px",
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

                                    <div
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{
                                            position: "absolute",
                                            right: "15px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            cursor: "pointer",
                                            color: "#777"
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowRegister(false)}
                                style={{
                                    width: "400px",
                                    height: "40px",
                                    backgroundColor: "blue",
                                    borderRadius: 0,
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize:"14px"
                                }}
                            >
                                LOG IN
                            </button>

                        </div>
                    </div>
                ) : (
                    /* REGISTER (WHEN TOGGLED LEFT) */
                    <div style={{ maxWidth: "800px" }} className="register">
                        <p className="LightFontVeryBig" style={{ color: "#448EE4", paddingLeft:"180px"}}>
                            Register
                        </p>

                        <div style={{ display:"flex", flexDirection: "column", gap: "30px",alignItems:"flex-end", width:"600px", marginTop:"20px"}}>
                            <div style={{width:"420px", display:"flex", flexDirection: "column", gap: "10px",}}>
                                <p className="LightFont" style={{ color: "black" }}>
                                    Email address <span style={{ color: "red" }}>*</span>
                                </p>
                                <input
                                    type="text"
                                    style={{
                                 width: "400px",
                                        height: "40px",
                                        backgroundColor: "#f6f6f6",
                                        borderRadius: "2px",
                                        border: 0,
                                        padding: "8px 12px",
                                        outline: "none",
                                        marginTop: "5px"
                                    }}
                                />
                                                            <button
                                onClick={() => setShowRegister(false)}
                                style={{
                                            width: "400px",
                                    height: "40px",
                                    backgroundColor: "blue",
                                    borderRadius: 0,
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize:"14px"
                                }}
                            >
                                REGISTER
                            </button>
                            </div>

                        </div>
                    </div>
                )}

                {/* DIVIDER */}
                <div
                    style={{
                        width: "1px",
                        backgroundColor: "#dcdcdc",
                        height: "320px"
                    }}
                />

                {/* RIGHT SIDE */}
                {!showRegister ? (
                    /* oldReg DEFAULT RIGHT */
                    <div
                        style={{
                            maxWidth: "800px",
                            padding: "100px",
                            paddingLeft: "10px",
                            paddingTop: "0px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems:"center",
                            gap: "30px"
                        }}
                        className="oldReg"
                    >
                        <p className="LightFontVeryBig" style={{ color: "#448EE4" }}>
                            Register
                        </p>

                        <p className="LightFont">
                            Registering for this site allows you to access
                            your order status and history. Just fill in the fields below, and we'll
                            get a new account set up for you in no time. We will only ask you for
                            information necessary to make the purchase process faster and easier.
                        </p>

                        <button
                            onClick={() => setShowRegister(true)}
                            style={{
                                width: "300px",
                                height: "60px",
                                backgroundColor: "#f6f6f6",
                                borderRadius: 0,
                                color: "black",
                                border: "none",
                                cursor: "pointer",
                                outline: "none",        // removes outline
                                boxShadow: "none",

                                                                            width: "120px",
                                    height: "40px",
                            }}
                        >
                            <p
                                className="LightFontBig"
                                style={{ fontSize: "14px", margin: 0 }}
                            >
                                REGISTER
                            </p>
                        </button>
                    </div>
                ) : (
                    /* LOGIN MOVES TO RIGHT WHEN REGISTER ACTIVE */
                    <div style={{ maxWidth: "800px", display:"flex", flexDirection:"column", gap:"30px" }} className="login">
                        <p className="LightFontVeryBig" style={{ color: "#448EE4" }}>
                            Register
                        </p>
                        <p className="LightFont">Registering for this site allows you to access
                            your order status and history. Just fill in the fields below, and we'll
                            get a new account set up for you in no time. We will only ask you for
                            information necessary to make the purchase process faster and easier.</p>

                        <button
                            onClick={() => setShowRegister(false)}
                            onMouseDown={(e) => e.preventDefault()}  // prevents focus ring
                            style={{
                            width: "300px",
                                height: "60px",
                                backgroundColor: "#f6f6f6",
                                borderRadius: 0,
                                color: "black",
                                border: "none",
                                cursor: "pointer",
                                outline: "none",        // removes outline
                                boxShadow: "none",

                                                                            width: "120px",
                                    height: "40px",
                            }}
                        >
                            <p
                                className="LightFontBig"
                                style={{ fontSize: "14px", margin: 0 }}
                            >
                                LOGIN
                            </p>
                        </button>

                    </div>
                )}

            </div>
        </div>
    );
};
