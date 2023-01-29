import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='mainCarousel'>
            <Carousel.Item>
                <picture>
                    <source className="d-block w-100" srcSet="/coverImage1.avif" type="image/avif"/>
                    <img className="d-block w-100" src="/carousel1.jpg" alt="First slide" type="image/jpg"/>
                </picture>
                <Carousel.Caption>
                    <h3>Top Fiber Contractor in Colorado</h3>
                    <p>
                        At Paonia, our mission is to be a leading underground construction company, providing safe, reliable, and high-quality services to our clients, while maintaining the highest standards of safety and professionalism, and making a positive impact on the communities we serve.
                    </p>
                    <Button variant='danger'><Link to='/contact'>Contact Us</Link></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <picture>
                    <source className="d-block w-100" srcSet="/coverImage2.avif" type="image/avif"/>
                    <img className="d-block w-100" src="/carousel2.jpg" alt="Second slide" type="image/jpg"/>
                </picture>
                <Carousel.Caption>
                    <h3>Interested in Joining our Team</h3>
                    <p>
                        Join our team and build a career with Paonia! We offer exciting opportunities for skilled construction workers, equipment operators, and more. Apply now and start building your future with us.
                    </p>
                    <Button variant='danger'><Link to='/careers'>View Openings</Link></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <picture>
                    <source className="d-block w-100" srcSet="/coverImage3.avif" type="image/avif"/>
                    <img className="d-block w-100" src="/carousel3.jpg" alt="Third slide" type="image/jpg"/>
                </picture>
                <Carousel.Caption>
                    <h3>Safety Focused Culture</h3>
                    <p>
                        Safety is a top priority for us at Paonia. We understand that working underground can be hazardous, which is why we take every precaution to ensure the safety of our employees and anyone who may be impacted by our work.
                    </p>
                    <Button variant='danger'><Link to='/about'>Learn More</Link></Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function NonDesktopControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='nonDesktopCarousel'>
            <Carousel.Item>
                <picture>
                    <source className="d-block w-100" srcSet="/coverImage1.avif" type="image/avif"/>
                    <img className="d-block w-100" src="/carousel1.jpg" alt="First slide" type="image/jpg"/>
                </picture>
                <Carousel.Caption>
                    <h3>Top Fiber Contractor in Colorado</h3>
                    <p>
                        At Paonia, our mission is to be a leading underground construction company, providing safe, reliable, and high-quality services to our clients, while maintaining the highest standards of safety and professionalism, and making a positive impact on the communities we serve.
                    </p>
                    <Button variant='danger'><Link to='/contact'>Contact Us</Link></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <picture>
                    <source className="d-block w-100" srcSet="/coverImage2.avif" type="image/avif"/>
                    <img className="d-block w-100" src="/carousel2.jpg" alt="Second slide" type="image/jpg"/>
                </picture>
                <Carousel.Caption>
                    <h3>Interested in Joining our Team</h3>
                    <p>
                        Join our team and build a career with Paonia! We offer exciting opportunities for skilled construction workers, equipment operators, and more. Apply now and start building your future with us.
                    </p>
                    <Button variant='danger'><Link to='/careers'>View Openings</Link></Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <picture>
                    <source className="d-block w-100" srcSet="/coverImage3.avif" type="image/avif"/>
                    <img className="d-block w-100" src="/carousel3.jpg" alt="Third slide" type="image/jpg"/>
                </picture>
                <Carousel.Caption>
                    <h3>Safety Focused Culture</h3>
                    <p>
                        Safety is a top priority for us at Paonia. We understand that working underground can be hazardous, which is why we take every precaution to ensure the safety of our employees and anyone who may be impacted by our work.
                    </p>
                    <Button variant='danger'><Link to='/about'>Learn More</Link></Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export { ControlledCarousel, NonDesktopControlledCarousel }