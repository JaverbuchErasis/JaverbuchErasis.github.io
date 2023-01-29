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
                    <h1>About Us</h1>
                        <hr></hr>
                        At Paonia, we specialize in providing underground construction services for a wide range of projects. 
                        Our services include the design, planning, and construction of underground infrastructure such as:
                        <br></br>
                        <ul>
                            <li>Utility lines installation, repair and maintenance for electricity, gas, water, and sewage systems</li>
                            <li>Tunnel construction for transportation, mining and civil engineering projects</li>
                            <li>Fiber Optic, broadband, and other telecom cable projects</li>
                            <li>Shoring, underpinning and underpinning repair of existing structures</li>
                            <li>Site preparation, excavation, and grading</li>
                        </ul>
                        We have a team of highly skilled and experienced construction workers, engineers, and project managers who are experts in the field of underground construction. They use the latest technology and equipment to ensure the highest level of quality and safety on every project.
                        <br></br><br></br>
                        Our services are not limited to new construction, we also provide repair and maintenance services for existing underground infrastructure. We work closely with government agencies and other organizations to ensure that our projects comply with all safety and environmental regulations.
                        <br></br><br></br>
                        We understand that every project is unique and we pride ourselves on our ability to provide customized solutions for each of our clients. From design and planning to completion, we manage every aspect of the project to ensure that it is completed on time and within budget.
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
                    <ul>
                        <li>
                        At our Paonia, safety is our top priority. We understand that construction can be a hazardous industry and we 
                        take every precaution to ensure the safety of our employees and anyone who may be impacted by our work.
                        </li><li>
                        All of our employees undergo rigorous safety training and are required to follow strict safety protocols at all times. We 
                        also conduct regular safety inspections and audits to identify and address any potential hazards.
                        </li><li>
                        Personal Protective Equipment (PPE) is mandatory on all of our job sites and we provide our workers with the necessary 
                        equipment to keep them safe. We also have a dedicated safety officer on staff to oversee all safety aspects of the project, 
                        and to respond to any safety concerns.
                        </li><li>
                        We also implement a strict drug-free workplace policy and conduct regular drug tests to ensure that all of our employees 
                        are able to work safely at all times.
                        </li><li>
                        We work closely with our clients and local authorities to ensure that all safety regulations are met and exceeded. We 
                        believe that by prioritizing safety, we can not only protect our employees, but also ensure the success of the project.
                        </li>
                    </ul>
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
                    <ul>
                        <li>
                        Paonia has a long history of delivering high-quality and safe telecom construction services. 
                        We have been in business for several decades and have built a reputation for excellence in the industry.
                        </li><li>
                        We specialize in a wide range of underground construction services, including tunneling, excavation, and telecom work. Our 
                        team of experts is highly skilled and experienced in all aspects of underground construction, and are equipped with the latest 
                        technology and equipment to ensure that every project is completed safely and efficiently.
                        </li><li>
                        We have a proven track record of success in the telecommunications industry, and we have the knowledge and expertise necessary 
                        to handle projects of all sizes and complexity. We work closely with our clients to understand their unique needs and to deliver 
                        solutions that are tailored to their specific requirements.
                        </li><li>
                        We pride ourselves on our commitment to safety, our attention to detail, and our ability to deliver projects on time and within 
                        budget. We work closely with our clients to understand their specific needs and tailor our services to meet those needs.
                        </li><li>
                        We are dedicated to providing high-quality services and to building long-lasting relationships with our clients. Trust us to handle 
                        all of your underground construction needs.
                        </li>
                    </ul>
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
                        At Paonia, we specialize in providing underground construction services for a wide range of projects. 
                        Our services include the design, planning, and construction of underground infrastructure such as:
                        <br></br>
                        <ul>
                            <li>Utility lines installation, repair and maintenance for electricity, gas, water, and sewage systems</li>
                            <li>Tunnel construction for transportation, mining and civil engineering projects</li>
                            <li>Fiber Optic, broadband, and other telecom cable projects</li>
                            <li>Shoring, underpinning and underpinning repair of existing structures</li>
                            <li>Site preparation, excavation, and grading</li>
                        </ul>
                        We have a team of highly skilled and experienced construction workers, engineers, and project managers who are experts in the field of underground construction. They use the latest technology and equipment to ensure the highest level of quality and safety on every project.
                        <br></br><br></br>
                        Our services are not limited to new construction, we also provide repair and maintenance services for existing underground infrastructure. We work closely with government agencies and other organizations to ensure that our projects comply with all safety and environmental regulations.
                        <br></br><br></br>
                        We understand that every project is unique and we pride ourselves on our ability to provide customized solutions for each of our clients. From design and planning to completion, we manage every aspect of the project to ensure that it is completed on time and within budget.
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
                        <ul>
                            <li>
                            At our Paonia, safety is our top priority. We understand that construction can be a hazardous industry and we 
                            take every precaution to ensure the safety of our employees and anyone who may be impacted by our work.
                            </li><li>
                            All of our employees undergo rigorous safety training and are required to follow strict safety protocols at all times. We 
                            also conduct regular safety inspections and audits to identify and address any potential hazards.
                            </li><li>
                            Personal Protective Equipment (PPE) is mandatory on all of our job sites and we provide our workers with the necessary 
                            equipment to keep them safe. We also have a dedicated safety officer on staff to oversee all safety aspects of the project, 
                            and to respond to any safety concerns.
                            </li><li>
                            We also implement a strict drug-free workplace policy and conduct regular drug tests to ensure that all of our employees 
                            are able to work safely at all times.
                            </li><li>
                            We work closely with our clients and local authorities to ensure that all safety regulations are met and exceeded. We 
                            believe that by prioritizing safety, we can not only protect our employees, but also ensure the success of the project.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="aboutUsLeftSide">
                    <div className="aboutUsDescriptorText">
                        <h1>Background</h1>
                        <hr></hr>
                        <ul>
                            <li>
                            Our underground construction company has a long history of delivering high-quality and safe underground construction services. 
                            We have been in business for several decades and have built a reputation for excellence in the industry.
                            </li><li>
                            We specialize in a wide range of underground construction services, including tunneling, excavation, and foundation work. Our 
                            team of experts is highly skilled and experienced in all aspects of underground construction, and are equipped with the latest 
                            technology and equipment to ensure that every project is completed safely and efficiently.
                            </li><li>
                            We have a proven track record of success in the telecommunications industry, and we have the knowledge and expertise necessary 
                            to handle projects of all sizes and complexity. We work closely with our clients to understand their unique needs and to deliver 
                            solutions that are tailored to their specific requirements.
                            </li><li>
                            We pride ourselves on our commitment to safety, our attention to detail, and our ability to deliver projects on time and within 
                            budget. We work closely with our clients to understand their specific needs and tailor our services to meet those needs.
                            </li><li>
                            We are dedicated to providing high-quality services and to building long-lasting relationships with our clients. Trust us to handle 
                            all of your underground construction needs.
                            </li>
                        </ul>
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
            <div style={{textAlign: "center", paddingLeft: "2em", paddingRight: "2em"}}>
                <h2><b><u>MISSION</u></b></h2><br></br>
                <b>
                    At Paonia, our mission is to be a leading underground construction company, providing safe, reliable, and high-quality services to our clients, 
                    while maintaining the highest standards of safety and professionalism, and making a positive impact on the communities we serve.
                </b>
                <br></br><br></br>
            </div>
            {props.viewport === "Desktop" ? desktopView : mobileView}
        </div>
    )
}

export { About }