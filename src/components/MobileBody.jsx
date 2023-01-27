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
        <div data-aos="fade-in" className='titleMobileBodyContainer'>
            <p className='titleMobileBodySection'>
                Lorem ipsum dolor sit amet, aeque alterum repudiare ius at, at sapientem liberavisse est. Ei illud democritum pro, vel id dictas corrumpit. Id usu idque elitr eligendi, nullam diceret reprehendunt et per, pro amet iuvaret instructior ex. Wisi partem at has, ea quas adhuc falli vim. Est elit sale dolorum et, mea et putant utroque, mei ne accumsan phaedrum honestatis.
            </p>
        </div>
    )
}

const MobileMiddleBody = (props) => {
    const verbaige = [
        {title: "Fiber Instillation", text: 'URC: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', key: 69},
        {title: "Underground Residential Construction", text: 'COM: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', key: 70},
        {title: "Commercial Construction", text: 'FIBER: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', key: 71}
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
                            Paonia Inc. is committed to the health and safety of our employees, customers, contractors and 
                            the communities in which we work. It is our mission to provide and maintain a safe work environment for our employees. 
                            Our core philosophy is that safety takes precedence over all business pursuits and work practices.
                        </div>
                        <br></br>
                        <div>
                            We strictly adhere to environmental rules and regulations, while safely and efficiently executing our services. 
                            We continue to use our business processes to identify and manage risks to the environment and reduce potential 
                            environmental impacts throughout the life of our assets. 
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