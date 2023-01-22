import { React, useEffect  } from 'react'
import AOS from 'aos';

const About = (props) => {
    AOS.init();
    useEffect(() => {
        document.title = 'About Us - Paonia Inc.';
    }, []);
    
    const mobileView = (
        <div>
            <div data-aos="fade-in" className="row" style={{
                background: "url(./carousel1.jpg)",
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
                background: "url(./carousel2.jpg)",
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
                background: "url(./carousel3.jpg)",
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
                    <img className="aboutUsDescriptorImage" src="./carousel1.jpg" alt="aboutus1"/>
                </div>
            </div>
            <div className="row">
                <div className="aboutUsLeftSide">
                    <img className="aboutUsDescriptorImage" src="./carousel2.jpg" alt="aboutus2"/>
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
                    <img className="aboutUsDescriptorImage" src="./carousel3.jpg" alt="aboutus3"/>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            <div className="aboutUsCoverImage">
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