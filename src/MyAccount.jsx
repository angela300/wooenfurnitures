import "./MyAccount.css";
import "./App.css";
import { useState, useEffect } from "react";

export const MyAccount = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Detect screen resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

            {/* MAIN FLEX CONTAINER */}
            <div
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: isMobile ? "50px" : "100px",
                    marginTop: "40px",
                    padding: isMobile ? "0 20px" : "0"
                }}
            >

                {/* LEFT SIDE (LOGIN OR REGISTER FORM) */}
                {!showRegister ? (
                    <div style={{ maxWidth: "800px", width: isMobile ? "100%" : "auto" }} className="login">
                        <p className="LightFontVeryBig" style={{ color: "#448EE4" }}>
                            Login
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                                alignItems: "center",
                                width: isMobile ? "100%" : "600px"
                            }}
                        >

                            {/* Username */}
                            <div style={{ width: isMobile ? "100%" : "420px" }}>
                                <p className="LightFont" style={{ color: "black" }}>
                                    Username or email address{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </p>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
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

                            {/* Password */}
                            <div style={{ width: isMobile ? "100%" : "420px" }}>
                                <p className="LightFont" style={{ color: "black" }}>
                                    Password <span style={{ color: "red" }}>*</span>
                                </p>

                                <div style={{ position: "relative", marginTop: "5px" }}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        style={{
                                            width: "100%",
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

                            <button
                                style={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    height: "40px",
                                    backgroundColor: "blue",
                                    borderRadius: 0,
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                }}
                            >
                                LOG IN
                            </button>
                        </div>
                    </div>
                ) : (
                    <div style={{ maxWidth: "800px", width: isMobile ? "100%" : "auto" }} className="register">
                        <p className="LightFontVeryBig" style={{ color: "#448EE4" }}>
                            Register
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "30px",
                                alignItems: "center",
                                width: isMobile ? "100%" : "600px",
                                marginTop: "20px"
                            }}
                        >
                            <div style={{ width: isMobile ? "100%" : "420px" }}>
                                <p className="LightFont" style={{ color: "black" }}>
                                    Email address <span style={{ color: "red" }}>*</span>
                                </p>
                                <input
                                    type="text"
                                    style={{
                                        width: "100%",
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

                            <button
                                style={{
                                    width: "100%",
                                    maxWidth: "400px",
                                    height: "40px",
                                    backgroundColor: "blue",
                                    borderRadius: 0,
                                    color: "white",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "14px"
                                }}
                            >
                                REGISTER
                            </button>
                        </div>
                    </div>
                )}

                {/* DIVIDER — hidden on mobile */}
                {!isMobile && (
                    <div
                        style={{
                            width: "1px",
                            backgroundColor: "#dcdcdc",
                            height: "320px"
                        }}
                    />
                )}

                {/* RIGHT SIDE */}
                <div
                    style={{
                        maxWidth: "800px",
                        width: isMobile ? "100%" : "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "30px",
                        padding: isMobile ? "0" : "100px 10px 0 10px"
                    }}
                >
                    <p className="LightFontVeryBig" style={{ color: "#448EE4" }}>
                        {showRegister ? "Login" : "Register"}
                    </p>

                    <p className="LightFont" style={{ textAlign: isMobile ? "center" : "left" }}>
                        Registering for this site allows you to access
                        your order status and history. Just fill in the fields below,
                        and we'll get a new account set up for you in no time.
                    </p>

                    <button
                        onClick={() => setShowRegister(!showRegister)}
                        style={{
                            width: "120px",
                            height: "40px",
                            backgroundColor: "#f6f6f6",
                            borderRadius: 0,
                            color: "black",
                            border: "none",
                            cursor: "pointer"
                        }}
                    >
                        {showRegister ? "LOGIN" : "REGISTER"}
                    </button>
                </div>

            </div>
        </div>
    );
};