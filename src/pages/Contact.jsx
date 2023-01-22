import { React, useEffect  } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = (props) => {
    useEffect(() => {
        document.title = 'Contact - Paonia Inc.';
    }, []);

    const mobileView = (
        <div className="row" style={{
            background: "url(./contactFormImage2.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <div className='col-sm-12'>
                <br></br>
                <h2 style={{color: "black", fontWeight: "bold", backgroundColor: "white"}}>We want to Hear from You!</h2>
                <br></br>
                <Container>
                    <Form>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingFirstName" label="First Name">
                                    <Form.Control type="text" placeholder="First Name" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingLastName" label="Last Name">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>
                            </Col>
                        </Row><br></br>
                        <FloatingLabel controlId="floatingEmail" label="Email Address">
                            <Form.Control type="email" placeholder="Email Address" />
                        </FloatingLabel><br></br>
                        <FloatingLabel controlId="floatingPhone" label="Contact Number">
                            <Form.Control type="tel" placeholder="Contact Number"/>
                        </FloatingLabel><br></br>
                        <Form.Select size="lg" aria-label="Recipient">
                            <option>Recipient</option>
                            <option>General Inquiries</option>
                            <option>Career/Job</option>
                            <option>Client Requests</option>
                            <option>Bid Requests</option>
                            <option>Other</option>
                        </Form.Select><br></br>
                        <FloatingLabel controlId="floatingInquiry" label="Reason for Inquiry">
                            <Form.Control
                                as="textarea"
                                placeholder="Reason for Inquiry"
                                style={{ height: '150px' }}
                            />
                        </FloatingLabel><br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </div>
    )

    const desktopView = (
        <div className="row">
            <div className='col-sm-6'>
                <br></br>
                <h2>We want to Hear from You!</h2>
                <br></br>
                <Container>
                    <Form>
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel controlId="floatingFirstName" label="First Name">
                                    <Form.Control type="text" placeholder="First Name" />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId="floatingLastName" label="Last Name">
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>
                            </Col>
                        </Row><br></br>
                        <FloatingLabel controlId="floatingEmail" label="Email Address">
                            <Form.Control type="email" placeholder="Email Address" />
                        </FloatingLabel><br></br>
                        <FloatingLabel controlId="floatingPhone" label="Contact Number">
                            <Form.Control type="tel" placeholder="Contact Number"/>
                        </FloatingLabel><br></br>
                        <Form.Select size="lg" aria-label="Recipient">
                            <option>Recipient</option>
                            <option>General Inquiries</option>
                            <option>Career/Job</option>
                            <option>Client Requests</option>
                            <option>Bid Requests</option>
                            <option>Other</option>
                        </Form.Select><br></br>
                        <FloatingLabel controlId="floatingInquiry" label="Reason for Inquiry">
                            <Form.Control
                                as="textarea"
                                placeholder="Reason for Inquiry"
                                style={{ height: '150px' }}
                            />
                        </FloatingLabel><br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
            <div className='col-sm-6'>
                <img src="/contactFormImage2.jpg" alt="Contact Form" style={{
                    marginTop: "2em",
                    marginLeft: "-3em",
                    width: "105%",
                    height: "auto",
                    float: "left"
                }}/>
            </div>
        </div>
    )

    return props.viewport === "Desktop" ? desktopView : mobileView
}
  
export { Contact };