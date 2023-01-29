import { ControlledCarousel, NonDesktopControlledCarousel } from '../components/Carousel'
import { UpperBody, MiddleBody, LowerBody } from '../components/Body'
import { TabletUpperBody, TabletMiddleBody, TabletLowerBody } from '../components/TabletBody'
import { MobileUpperBody, MobileMiddleBody, MobileLowerBody } from '../components/MobileBody'

const Home = (props) => {
    const homePage = props.viewport === "Desktop" ? 
        <div>
            <ControlledCarousel></ControlledCarousel>
            <UpperBody></UpperBody>
            <MiddleBody></MiddleBody>
            <LowerBody></LowerBody><br></br>
        </div> 
        : props.viewport === "Tablet" ? 
        <div>
            <NonDesktopControlledCarousel></NonDesktopControlledCarousel>
            <TabletUpperBody></TabletUpperBody>
            <TabletMiddleBody></TabletMiddleBody>
            <TabletLowerBody></TabletLowerBody><br></br>
        </div> 
        : props.viewport === "Mobile" ? 
        <div>
            <NonDesktopControlledCarousel></NonDesktopControlledCarousel>
            <MobileUpperBody></MobileUpperBody>
            <MobileMiddleBody></MobileMiddleBody>
            <MobileLowerBody></MobileLowerBody><br></br>
        </div> 
    : ""

    return homePage
}

export {Home}