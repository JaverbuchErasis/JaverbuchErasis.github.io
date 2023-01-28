import { useState , React } from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faBuilding, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { browserName } from "react-device-detect";

const avifSup = browserName === "Chrome" || browserName === "Firefox" || browserName === "Safari" ? true : false

const TabletUpperBody = (props) => {
    AOS.init();

    return (
        <div data-aos="fade-in" className={avifSup ? 'titleTabletBodyContainerHQ' : 'titleTabletBodyContainerLQ'}>
            <p className='titleTabletBodySection'>
                At Paonia, we specialize in building and maintaining underground infrastructure that keeps our cities and communities running smoothly. 
                As a leading underground construction company, we have extensive experience in constructing and repairing utility lines, tunnels, and underground structures.
                <br></br><br></br>
                Our team of skilled construction workers, engineers, and project managers are experts in the field of underground construction and use the latest technology 
                and equipment to ensure the highest level of quality and safety on every project.
                <br></br><br></br>
                We take pride in the diversity of our projects, ranging from installing new utility lines to building underground parking structures, repairing existing 
                infrastructure, and constructing tunnels and underground transit systems. We work closely with government agencies and other organizations to ensure that our 
                projects comply with all safety and environmental regulations.
                <br></br><br></br>
                At Paonia, we believe in investing in our employees and offer specialized training and apprenticeship programs to help them develop the necessary 
                skills for a successful career in underground construction.
                <br></br><br></br>
                If you're looking for a challenging and rewarding career in underground construction, join our team and be a part of building a better future for our communities. 
                Contact us today to learn more about our career opportunities.</p>
        </div>
    )
}

const TabletMiddleBody = (props) => {
    const verbaige = {
        inital: 'Select our different offerings on the left to learn more and Paonia',
        fbr: 'Fiber installation service involves the process of laying fiber optic cables in order to provide telecommunications, internet and cable TV services. Paonia offers this service and typically begins with a survey of the site to determine the best route for the cable, followed by excavation to create a trench for the cable. Paonia will then lay the fiber optic cable into the trench, cover it with soil and test the cable for proper functioning. We also take care of the final step of restoring the site to its original condition. This service is essential for providing high-speed internet and other communication services.',
        com: 'Commercial underground services involve the construction, repair and maintenance of underground infrastructure such as utility lines, underground storage tanks, and sewage systems for commercial and public properties. The process typically starts with site assessment, followed by excavation, installation and testing of the underground infrastructure, and site restoration. These services are essential for the proper functioning of commercial properties and ensure that buildings have access to necessary utilities such as water, gas, and electricity, as well as the safe disposal of waste. Paonia offers commercial underground services and have specialized equipment and trained professionals to handle the complex nature of underground construction.',
        urc: 'Underground residential construction service involves building below-ground structures, such as basements, garages, and storm shelters, as part of a residential construction project. The process typically starts with excavation and site preparation, followed by the construction of the underground structure, and the installation of necessary systems such as plumbing and electrical. Paonia offers this service and uses specialized equipment and techniques to ensure that the underground structure is properly waterproofed and protected from potential hazards. This service provides additional living space and can add value to the property.'
    }
    const [subSectionVerbaige, setSubSectionVerbaige] = useState(verbaige.inital);
    // const [subSectionSelect, setSubSectionSelect] = useState("inital");

    const selectVerbiageOption = (val) => {
        setSubSectionVerbaige(verbaige[val])
    }

    AOS.init();

    return (
        <div data-aos="fade-in" className='midBodyContainer'>
                <div className="row">
                    <div className='col-8'>
                        <div className=' midBodyContainerVerbaige'>
                            {subSectionVerbaige}
                        </div>
                    </div>
                    <div className='col-3 selectableOptionGroup'>
                        <div className='selectableOption' onClick={() => {selectVerbiageOption("fbr")}}>
                            <FontAwesomeIcon icon={faGlobe} size="3x" border/>
                            <div className='selectableOptionText'>
                                Fiber Installation
                            </div>
                        </div><br></br>
                        <div className='selectableOption' onClick={() => {selectVerbiageOption("urc")}}>
                            <FontAwesomeIcon icon={faBolt} size="3x" border/>
                            <div className='selectableOptionText'>
                                Underground Residental Construction
                            </div>
                        </div><br></br>
                        <div className='selectableOption' onClick={() => {selectVerbiageOption("com")}}>
                            <FontAwesomeIcon icon={faBuilding} size="3x" border/>
                            <div className='selectableOptionText'>
                                Commercial Construction
                            </div>
                        </div><br></br>

                    </div>
                </div>
        </div>
    )
}

const TabletLowerBody = (props) => {
    AOS.init();

    return (
        <div data-aos="fade-in" className='row lowerBodyContainer'>
            <div className={avifSup ? 'lowerTabletBodyContainerLeftHQ' : 'lowerTabletBodyContainerLeftLQ'}>
                <div className='lowerBodyContainerLeftText'><h3 className='lowerBodyContainerLeftTextHead'>Safety and Culture</h3><br></br>
                    <div>
                        <div>
                            Safety is a top priority for us at Paonia. We understand that working underground can be hazardous, 
                            which is why we take every precaution to ensure the safety of our employees and anyone who may be impacted by our work. 
                            All of our employees undergo rigorous safety training and are required to follow strict safety protocols at all times. 
                            We also conduct regular safety inspections and audits to identify and address any potential hazards. 
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

export { TabletUpperBody, TabletMiddleBody, TabletLowerBody }