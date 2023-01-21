import { React } from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const MainFooter = () => {
    return (
        <MDBFooter bgColor='white' className='text-center text-lg-start text-muted'>
            <section>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='hard-hat' className='me-3' />
                                Paonia Inc
                            </h6>
                            <img src='/paoniaLogo.jpg' alt='Logo' style={{
                                width: "100%"
                            }}/>
                        </MDBCol>
                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Site Map</h6>
                            <p>
                                {/* <a href='about' className='text-reset'>
                                    About Paonia
                                </a> */}
                                <Link to='/about' className='text-reset'>About Paonia</Link>
                            </p>
                            <p>
                                {/* <a href='projects' className='text-reset'>
                                    Projects
                                </a> */}
                                <Link to='/projects' className='text-reset'>Projects</Link>
                            </p>
                            <p>
                                {/* <a href='contact' className='text-reset'>
                                    Contact
                                </a> */}
                                <Link to='/contact' className='text-reset'>Contact</Link>
                            </p>
                            <p>
                                {/* <a href='careers' className='text-reset'>
                                    Careers
                                </a> */}
                                <Link to='/careers' className='text-reset'>Careers</Link>
                            </p>
                        </MDBCol>
                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                5055 List Drive
                                <br></br>
                                Colorado Springs, CO 80919
                            </p>
                            <p>
                                <a href="tel:17195901344">
                                    <MDBIcon color='secondary' icon='phone' className='me-3' /> + 1-719-590-1344
                                </a>
                            </p>
                            <p>
                                <a href="mailto: info@paoniainc.com">
                                    <MDBIcon color='secondary' icon='envelope' className='me-3' /> Send an Email
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <div className='text-center p-4'>
                © 2022 Copyright:&nbsp;
                {/* <Link to='/' className='text-reset fw-bold'>Paonia Inc</Link> */}
                <a className='text-reset fw-bold' href='https://paoniainc.com/'>
                    Paonia Inc
                </a>
            </div>
        </MDBFooter>
    )
}

export { MainFooter }