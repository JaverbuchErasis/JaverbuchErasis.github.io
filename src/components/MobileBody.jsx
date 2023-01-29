import { useState , React } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { ServicesMV } from './MobileViewServices';
import AOS from 'aos';
import { browserName } from "react-device-detect";

const avifSup = browserName === "Chrome" || browserName === "Firefox" || browserName === "Safari" ? true : false

const MobileUpperBody = (props) => {
    AOS.init();

    return (
        <div data-aos="fade-in" className={avifSup ? 'titleMobileBodyContainerHQ' : 'titleMobileBodyContainerLQ'}>
            <p className='titleMobileBodySection'>
                At Paonia, we specialize in building and maintaining telecom infrastructure that keeps our cities and communities running smoothly. 
                As a leading telecom construction company, we have extensive experience in constructing and repairing utility lines, tunnels, and underground structures.
                <br></br><br></br>
                Our team of skilled construction workers, engineers, and project managers are experts in the field of telecom construction and use the latest technology 
                and equipment to ensure the highest level of quality and safety on every project.
                <br></br><br></br>
                We take pride in the diversity of our projects, ranging from installing new utility lines to building underground telecom networks, repairing existing 
                infrastructure, and constructing tunnels and underground systems. We work closely with government agencies and other organizations to ensure that our 
                projects comply with all safety and environmental regulations.
                <br></br><br></br>
                At Paonia, we believe in investing in our employees and offer specialized training and apprenticeship programs to help them develop the necessary 
                skills for a successful career in underground construction.
                <br></br><br></br>
                If you're looking for a challenging and rewarding career in underground construction, join our team and be a part of building a better future for our communities. 
                Contact us today to learn more about our career opportunities.
            </p>
        </div>
    )
}

const MobileMiddleBody = (props) => {
    const verbaige = [
        {title: "Fiber Instillation", text: 'Fiber installation service involves the process of laying fiber optic cables in order to provide telecommunications, internet and cable TV services. Paonia offers this service and typically begins with a survey of the site to determine the best route for the cable, followed by excavation to create a trench for the cable. Paonia will then lay the fiber optic cable into the trench, cover it with soil and test the cable for proper functioning. We also take care of the final step of restoring the site to its original condition. This service is essential for providing high-speed internet and other communication services.', key: 69},
        {title: "Underground Residential Construction", text: 'Commercial underground services involve the construction, repair and maintenance of underground infrastructure such as utility lines, underground storage tanks, and sewage systems for commercial and public properties. The process typically starts with site assessment, followed by excavation, installation and testing of the underground infrastructure, and site restoration. These services are essential for the proper functioning of commercial properties and ensure that buildings have access to necessary utilities such as water, gas, and electricity, as well as the safe disposal of waste. Paonia offers commercial underground services and have specialized equipment and trained professionals to handle the complex nature of underground construction.', key: 70},
        {title: "Commercial Construction", text: 'Underground residential construction service involves building below-ground structures, such as basements, garages, and storm shelters, as part of a residential construction project. The process typically starts with excavation and site preparation, followed by the construction of the underground structure, and the installation of necessary systems such as plumbing and electrical. Paonia offers this service and uses specialized equipment and techniques to ensure that the underground structure is properly waterproofed and protected from potential hazards. This service provides additional living space and can add value to the property.', key: 71}
    ]

    const [dropDownOptions, setDropDownOptions] = useState([0, 0, 0])

    const adjustDropDown = (pos) => {
        let currentVal = dropDownOptions[pos["y"]]
        let newArr = [...dropDownOptions]
        newArr[pos["y"]] = currentVal === 1 ? 0 : 1
        setDropDownOptions(newArr)
    }

    AOS.init();

    return (
        <div data-aos="fade-in" className='midMobileBodyContainer'>
            <h2 style={{paddingTop: "1em"}}><b>Learn More About Paonia</b></h2><br></br>
            <ServicesMV
                data={verbaige}
                view={dropDownOptions}
                ddChange={adjustDropDown}
            />
        </div>
    )
}

const MobileLowerBody = (props) => {
    AOS.init();

    return (
        <div data-aos="fade-in" className='row lowerBodyContainer'>
            <div className={avifSup ? 'lowerTabletBodyContainerLeftHQ' : 'lowerTabletBodyContainerLeftLQ'}>
                <div className='lowerBodyContainerLeftText'><h3 className='lowerBodyContainerLeftTextHead'>Safety and Culture</h3><br></br>
                    <div>
                        <div>
                            Safety is a top priority for us at Paonia. We understand that working underground can be hazardous, 
                            which is why we take every precaution to ensure the safety of our employees and anyone who may be impacted by our work.
                            Let's work together to keep everyone safe on the job site.
                        </div>
                    </div>
                    <Button variant="danger"><Link to='/about'>Learn More</Link></Button>
                </div>
            </div>
            <div className={avifSup ? 'lowerTabletBodyContainerRightHQ' : 'lowerTabletBodyContainerRightLQ'}>
                <div>
                    <h1>Careers</h1>
                    <Button variant="danger"><Link to='/careers'>Job Openings</Link></Button>
                </div>
            </div>
        </div>
    )
}


export { MobileUpperBody, MobileMiddleBody, MobileLowerBody }