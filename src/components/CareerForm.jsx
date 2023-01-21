import { useState , React } from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ARCGISValidator } from '../utils/API'

const BaseApplyForm = (props) => {
    const [addressSugestions, setAddressSugestions] = useState([])

    const addressSearch = (event) => {
        const value = event.target.value;

        const autoSearch = async () => {
            try {
                const resp = await ARCGISValidator.get('&text=' + value);
                setAddressSugestions(resp.data.suggestions)
            } catch (err) {
                console.error(err)
            }
        }

        if(value.length >= 7) {
            autoSearch(value)
        }
    }

    return (
        <Form>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingFirstName" label="First Name">
                        <Form.Control type="text" name="fName" placeholder="First Name" onChange={props.onChange}/>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingMiddleName" label="Middle Name">
                        <Form.Control type="text" name="mName" placeholder="Middle Name" onChange={props.onChange}/>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingLastName" label="Last Name">
                        <Form.Control type="text" name="lName" placeholder="Last Name" onChange={props.onChange}/>
                    </FloatingLabel>
                </Col>
            </Row><br></br>
            <Form.Check 
                type="switch"
                name="cdl"
                label="Commercial Driver's License?"
                onChange={props.onChange}
            /><br></br>
            <FloatingLabel controlId="floatingAddress" label="Address">
                <Form.Control type="text" value={props.address} name="address" placeholder="Address" onChange={e => {props.onChange(e); addressSearch(e)}} onBlur={(e) => {if(e.relatedTarget.role !== "dialog") setAddressSugestions([])}}/>
                    {
                        <ul className="autocomplete-items">
                            {addressSugestions.length > 0 ? addressSugestions.map((x, y) => {
                                return <li key={y} onClick={() => {
                                    props.onChange({
                                        target: {
                                            name: "address",
                                            value: x.text
                                        }
                                    })
                                    setAddressSugestions([])
                                }}>{x.text}</li>
                            }) : ""}
                        </ul>
                    }
            </FloatingLabel><br></br>
            <FloatingLabel controlId="floatingEmail" label="Email Address">
                <Form.Control type="email" name="email" placeholder="Email Address" onChange={props.onChange}/>
            </FloatingLabel><br></br>
            <FloatingLabel controlId="floatingPhone" label="Contact Number">
                <Form.Control type="tel" name="phone" placeholder="Contact Number" onChange={props.onChange}/>
            </FloatingLabel><br></br>
        </Form>
    )
}

export { BaseApplyForm }