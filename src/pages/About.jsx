import { React, useEffect  } from 'react'
import AOS from 'aos';
import { browserName } from "react-device-detect";

const About = (props) => {
    AOS.init();
    useEffect(() => {
        document.title = 'About Us - Paonia Inc.';
    }, []);

    const avifSup = browserName === "Chrome" || browserName === "Firefox" || browserName === "Safari" ? true : false
    
    const mobileView = (
        <div>
            <div data-aos="fade-in" className="row" style={{
                background: avifSup ? "url(./aboutImg1.avif)" : "url(./aboutImg1.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <div style={{
                    // background: "rgb(0,0,0)",
                    // background: "radial-gradient(circle, rgba(0,0,0,0.33659401260504207) 0%, rgba(0,0,0,1) 100%)",
                    // opacity: ".6"
                }}>
                    <h1>About Us</h1>
                    <div className="aboutUsMobileText">
                        <hr></hr>
                        Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex.
                    </div>
                </div>
            </div>
            <div data-aos="fade-in" className="row" style={{
                background: avifSup ? "url(./aboutImg2.avif)" : "url(./aboutImg2.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <h1>Safety</h1>
                <div className="aboutUsMobileText">
                    <hr></hr>
                    Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex.
                </div>
            </div>
            <div data-aos="fade-in" className="row" style={{
                background: avifSup ? "url(./aboutImg3.avif)" : "url(./aboutImg3.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <h1>Background</h1>
                <div className="aboutUsMobileText">
                    <hr></hr>
                    Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex.
                </div>
            </div>
        </div>
    )

    const desktopView = (
        <div>
            <div className="row">
                <div className="aboutUsLeftSide">
                    <div className="aboutUsDescriptorText">
                        <h1>About Us</h1>
                        <hr></hr>
                        Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex.
                    </div>
                </div>
                <div className="aboutUsRightSide">
                <picture>
                    <source srcSet="./aboutImg1.avif" type="image/avif"/>
                    <img className="aboutUsDescriptorImage" src="./aboutImg1.jpg" alt="About Us 1" type="image/jpg"/>
                </picture>
                </div>
            </div>
            <div className="row">
                <div className="aboutUsLeftSide">
                    <picture>
                        <source srcSet="./aboutImg2.avif" type="image/avif"/>
                        <img className="aboutUsDescriptorImage" src="./aboutImg2.jpg" alt="About Us 2" type="image/jpg"/>
                    </picture>
                </div>
                <div className="aboutUsRightSide">
                    <div className="aboutUsDescriptorTextInv">
                        <h1>Safety</h1>
                        <hr></hr>
                        Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex.
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="aboutUsLeftSide">
                    <div className="aboutUsDescriptorText">
                        <h1>Background</h1>
                        <hr></hr>
                        Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex.
                    </div>
                </div>
                <div className="aboutUsRightSide">
                    <picture>
                        <source srcSet="./aboutImg3.avif" type="image/avif"/>
                        <img className="aboutUsDescriptorImage" src="./aboutImg3.jpg" alt="About Us 3" type="image/jpg"/>
                    </picture>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <div className={avifSup ? "aboutUsCoverImageHQ" : "aboutUsCoverImageLQ"}>
                <h1 style={{
                    paddingLeft: "2em",
                    paddingBottom: "3em",
                    color: "white",
                    fontWeight: "bolder",
                    textAlign: "left"
                }}>WHO IS PAONIA<hr style={{width: "8em", borderTop: "10px solid white", opacity: "100%"}}></hr></h1>
            </div>
            <div style={{textAlign: "center"}}>
                MISSION <br></br>
                Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex.<br></br><br></br>
            </div>
            {props.viewport === "Desktop" ? desktopView : mobileView}
        </div>
    )
}

export { About }