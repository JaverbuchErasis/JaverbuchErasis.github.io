import { useState, React, useEffect } from 'react'
import { BaseApplyForm } from '../components/CareerForm';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PDFDocument } from 'pdf-lib';
import downloadjs from 'downloadjs';
import { FileUploader } from "react-drag-drop-files";
import jobList from "../jobs.json";

const Career = (props) => {
    useEffect(() => {
        document.title = 'Career - Paonia Inc.';
    }, []);

    const jobOpenings = (jobList.length);
    const fileTypes = ["PDF"];
    const [file, setFile] = useState(null);

    const [showApply, setShowApply] = useState(false);
    const [showDesc, setShowDesc] = useState(false);
    const [showUpld, setShowUpld] = useState(false);

    const [selectedJob, setSelectedJob] = useState({});
    const [baseForm, setBaseForm] = useState({});
    const [localAddress, setLocalAddress] = useState("");

    const handleCloseApply = () => setShowApply(false);
    const handleShowApply = () => setShowApply(true);
    const handleCloseDesc = () => setShowDesc(false);
    const handleShowDesc = () => setShowDesc(true);
    const handleCloseUpld = () => setShowUpld(false);
    const handleShowUpld = () => setShowUpld(true);
    const handleFileChange = (file) => {
        setShowUpld(false);
        setFile(file);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBaseForm(values => ({...values, [name]: value}))

        if(name === "address") {
            setLocalAddress(value)
        }
    }

    useEffect(() => {
        console.log("file changed");
        console.log(file)
    }, [file])

    return (
        <div>
            <div className="careerHeaderImage">
                <h1> {props.viewport === "Mobile" ?
                    <span style={{
                        color: "white",
                        fontSize: "2em",
                        background: "rgba(70, 187, 125, .6)"
                    }}>CAREERS</span> :
                    <span style={{
                        color: "white",
                        fontSize: "2em",
                        paddingLeft: "3em",
                        paddingRight: "3em",
                        background: "rgba(70, 187, 125, .6)"
                    }}>CAREERS</span>}
                </h1><br></br>
                <h3><span style={{
                    color: "white",
                    fontSize: "1em",
                    background: "rgba(116, 149, 129, .6)"
                }}>PREMIER PROVIDER OF UNDERGROUND CONSTRUCTION SERVICES</span></h3>
            </div>
            <br></br>
            <Container className="careerTableContainer">
                <h3>CAREERS AT PAONIA INC</h3>
                <hr style={{width: "30%"}}></hr>
                <h5>JOB OPENINGS ({jobOpenings})</h5>
                <hr style={{width: "25%"}}></hr>
                <Button variant='secondary' onClick={handleShowUpld}>
                    Already Have An Application?
                </Button><br></br><br></br>

                <Modal show={showApply} onHide={handleCloseApply}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedJob.TITLE}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>Location:</b> {selectedJob.LOCATION}
                        <br></br><br></br>
                        <BaseApplyForm
                            onChange={handleChange}
                            address={localAddress}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseApply}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            handleCloseApply();
                            prefill(baseForm, selectedJob.TITLE);
                            handleShowUpld();
                            // console.log(baseForm)
                        }}>Apply
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal className="modal-lg" show={showDesc} onHide={handleCloseDesc}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedJob.TITLE}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <b>Location:</b> {selectedJob.LOCATION}
                        <br></br><br></br>
                        <h3>Responsibilities:</h3>
                            <ul>
                                {
                                    selectedJob.RESPONSIBILITY ? 
                                        (selectedJob.RESPONSIBILITY).map((val, index) => {
                                            return <li key={index}>{val}</li>
                                        })
                                    : ""
                                }
                            </ul>
                        <h3>{selectedJob.TITLE} Requirements:</h3>
                            <ul>
                                {
                                    selectedJob.REQUIREMENTS ? 
                                        (selectedJob.REQUIREMENTS).map((val, index) => {
                                            return <li key={index}>{val}</li>
                                        })
                                    : ""
                                }
                            </ul>
                        <h4>Benefits:</h4>
                            <p>
                                We offer excellent benefits package including health insurance, vision, dental,
                                group life insurance, as well as short/long term disability insurance. We process
                                payroll weekly and offer every employee the opportunity for advancement.
                            </p>
                        <h4>Equal Employment Opportunity:</h4>
                            <p>
                                Paonia, Inc is committed to Equal Employment Opportunity (EEO) for all employees
                                and applicants for employment. Paonia, Inc prohibits discrimination and
                                harassment based on race, color, religion, national origin, sex, gender identity,
                                sexual orientation, pregnancy, status as a parent, age, disability (physical or
                                mental), family medical history or genetic information, reprisal for participation in
                                protected EEO activity, or any other non-merit-based factor. These protections
                                extend to all employment policies, practices, and actions, including, but not limited
                                to, recruitment and hiring; job assignments; performance management; rewards;
                                promotions; training and development; reassignments; discipline; and
                                separations.
                            </p>
                        <span><b>Job Type:</b> {selectedJob.JOBTYPE}</span><br></br>
                        <span><b>Salary:</b> {selectedJob.SALARY}</span><br></br>
                        <span><b>License/Certification:</b> {selectedJob.LICENSE}</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseDesc}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => {
                            handleCloseDesc();
                            handleShowApply();
                        }}>Apply
                        </Button>
                    </Modal.Footer>
                </Modal>
                
                <Modal show={showUpld} onHide={handleCloseUpld}>
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Job Application</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FileUploader
                            multiple={true}
                            handleChange={handleFileChange}
                            name="file"
                            types={fileTypes}
                            label="Upload or Drop Application File"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseUpld}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Table striped bordered hover responsive className='careerTableMain'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Apply</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobList.map((val, index) => {
                                let viewableIndex = index + 1;
                                
                                return (
                                    <tr key={index} onClick={() => {setSelectedJob(val); handleShowDesc()}}>
                                        <td>{viewableIndex}</td>
                                        <td>{val.TITLE}</td>
                                        <td>{val.LOCATION}</td>
                                        <td><Button onClick={() => {
                                            handleShowApply();
                                            setSelectedJob(val);
                                        }}>Apply</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}

const prefill = async (data, title) => {
    const controlledFields = {
        fName: ['First Name', 'First'], 
        mName: ['Middle Name', 'Middle'],
        lName: ['Last Name', 'Last'], 
        email: 'Email', 
        phone: 'Phone'
        // address: 'address'
    }

    // const formUrl = './BaseApplicationPaonia.pdf'
    const formUrl = './EmploymentApplication2023.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const form = pdfDoc.getForm()
    // const fields = form.getFields()

    // fields.forEach(field => {
    //     const type = field.constructor.name
    //     const name = field.getName()
    //     console.log(`${type}: ${name}`)
    // })
    
    const titleField = form.getTextField('Position applied for')
    const todayField = form.getTextField('Date of Application')
    const fullnameField = form.getTextField('Applicant Name Printed')

    let todayDate = new Date()
    let formatedToday = (todayDate.getMonth() + 1) + "/" + todayDate.getDate() + "/" + todayDate.getFullYear()

    titleField.setText(title)
    todayField.setText(formatedToday)
    fullnameField.setText(data["fName"] + " " + data["mName"] + " " + data["lName"])

    for (const property in data) {
        if(controlledFields[property]) {
            if(Array.isArray(controlledFields[property])) {
                for(const singleField in controlledFields[property]) {
                    const field = form.getTextField(controlledFields[property][singleField])
                    field.setText(data[property])
                }
            } else {
                const field = form.getTextField(controlledFields[property])
                field.setText(data[property])
            }
        }
    }

    const pdfBytes = await pdfDoc.save()
    downloadjs(pdfBytes, "Paonia Application.pdf", "application/pdf");
}

export { Career }