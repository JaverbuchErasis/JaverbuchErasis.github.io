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
                    <h3>Best Underground Construction Contractor in your Area</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                    <h3>Top Safety Focused Culture</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                    <h3>Best Underground Construction Contractor in your Area</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
                    <h3>Top Safety Focused Culture</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <Button variant='danger'><Link to='/about'>Learn More</Link></Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export { ControlledCarousel, NonDesktopControlledCarousel }