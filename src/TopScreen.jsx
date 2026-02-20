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
                height: "200px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "white",
                margin: 0,
                padding: 0
            }}
        >
                <AuthSidebar
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
      />
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginBottom:"10px"}}>
                    <p style={{ margin: 0 }} className="LightFont">Download Now!</p>
                    <button
                        style={{
                            margin: 0,
                            backgroundColor: "#f3f3f3",
                            width: "120px",
                            height: "60px",

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: 0,
                            border: "none",
                            borderRadius: "2px",
                            marginLeft: "20px",
                            marginRight: "10px"
                        }}
                    >
                        <h4 className="fontBold" style={{ margin: 0 }}>
                            SUBMIT
                        </h4>
                    </button>

                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "660px" }}>
                    <img
                        src={wfun}
                        alt="Wooen Furniture Logo"
                        style={{ width: "120px", height: "auto", margin: 0, padding: 0, marginRight: "100px", marginLeft: "100px" }}
                    />

                    <p className="LightFont">Open until <span style={{ color: "blue", fontWeight:"bold" }}>6PM</span></p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", paddingTop: "70px"}}>
                
                                                    <Link to={`/AboutUs/`}>
                                        <p className="LightFont">About us<span style={{ marginLeft: "15px", marginRight:"15px" }}>|</span></p>
                                    </Link>
               <Link to={`/TrackOrder/`}><p className="LightFont">Track order<span style={{ marginLeft: "15px", marginRight:"15px" }}>|</span></p> </Link>
                <IoMdContact size={50} color="black" style={{  marginRight:"15px" }}  onClick={() => setOpenAuth(true)}/>
            </div>
        </div>
    );
};
