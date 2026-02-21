import { useEffect, useState } from "react";
import './TopScreen.css'
import wfun from './assets/wfun.png';
import prof from './assets/prof.png';
import { IoMdContact } from "react-icons/io";
import AuthSidebar from "./AuthSidebar";
import { Link } from "react-router-dom";

export const TopScreen = () => {
    const [openAuth, setOpenAuth] = useState(false);
    return (
        <div
            style={{     // full viewport width
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "white",
                margin: 0,
                padding: 0,
                       paddingLeft: "20px",
                            paddingRight:"20px",
                            position:"relative",
                            marginBottom:"10px"
            }}
        >
            <AuthSidebar
                isOpen={openAuth}
                onClose={() => setOpenAuth(false)}
            />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom: "10px" }}>
                    <p style={{ margin: 0 }} className="LightFont">Download Now!</p>
                    <button
                        style={{
                            margin: 0,
                            backgroundColor: "#f3f3f3",
                            width: "80px",
                            height: "40px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingLeft: 0,
                            border: "none",
                            borderRadius: "2px",
                            marginLeft: "20px",
                            marginRight: "10px"
                        }}
                    >
                        <p className="LightFontBold" style={{ margin: 0, fontSize:"13px" }}>
                            SUBMIT
                        </p>
                    </button>

                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "660px" }}>
                    <img
                        src={wfun}
                        alt="Wooen Furniture Logo"
                        style={{ width: "60px", height: "auto", margin: 0, padding: 0, marginRight: "100px", marginLeft: "100px" }}
                    />

                    <p className="LightFont">Open until <span style={{ color: "blue", fontWeight: "bold" }}>6PM</span></p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingTop: "55px" }}>

                <Link to={`/AboutUs/`}>
                    <p className="LightFont">About us<span style={{ marginLeft: "15px", marginRight: "15px" }}>|</span></p>
                </Link>
                <Link to={`/TrackOrder/`}><p className="LightFont">Track order<span style={{ marginLeft: "15px", marginRight: "15px" }}>|</span></p> </Link>
                <IoMdContact size={50} color="black" style={{ marginRight: "15px", cursor:"pointer" }} onClick={() => setOpenAuth(true)} />
            </div>
        </div>
    );
};
