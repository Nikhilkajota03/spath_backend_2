import React from "react";
import { Form, Card } from "react-bootstrap";

function CompanyDetails({
  nextStep,
  prevStep,
  handleChange,
  handleFileChange,
  inputValues,
}) {
  return (
    <div className="p-5 bmint">
      <div className="page container">
        {" "}
        <div>
          <Card.Header>
            <h5> Company details</h5>
          </Card.Header>
          <br />
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="companyName"
            value={inputValues.companyName}
            onChange={handleChange}
          />
          <br />

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Company email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="companyEmail"
              value={inputValues.companyEmail}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              (We'll never share the email with anyone else)
            </Form.Text>
          </Form.Group>
          <Form.Label>Company contact number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone n.o"
            name="companyContactNumber"
            value={inputValues.companyContactNumber}
            onChange={handleChange}
          />

          <br />
          <Form.Label>Company website</Form.Label>
          <Form.Control
            type="text"
            placeholder="Website"
            name="companyWebsite"
            value={inputValues.companyWebsite}
            onChange={handleChange}
          />
          <br />

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Company address</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="companyAddress"
              value={inputValues.companyAddress}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload certificate of incorporation</Form.Label>
            <Form.Control
              type="file"
              name="certificateOfIncorporation"
              // value={inputValues.certificateOfIncorporation.name}
              onChange={handleFileChange}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload MOA/AOA</Form.Label>
            <Form.Control
              type="file"
              name="MOAAOA"
              // value={inputValues.MOAAOA.name}
              onChange={handleFileChange}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload audit report</Form.Label>
            <Form.Control
              type="file"
              name="auditReport"
              // value={inputValues.auditReport.name}
              onChange={handleFileChange}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload GST</Form.Label>
            <Form.Control
              type="file"
              name="GST"
              // value={inputValues.GST.name}
              onChange={handleFileChange}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Director-1 </Form.Label>
            <Form.Control
              type="file"
              name="director1"
              // value={inputValues.director1.name}
              onChange={handleFileChange}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Director-2 </Form.Label>
            <Form.Control
              type="file"
              name="director2"
              // value={inputValues.director2.name}
              onChange={handleFileChange}
            />
          </Form.Group>
          <br />

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Director-3 </Form.Label>
            <Form.Control
              type="file"
              name="director3"
              // value={inputValues.director3.name}
              onChange={handleFileChange}
            />
          </Form.Group>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <button className="btn mt-3" onClick={prevStep}>Previous</button>
      <button className="btn mt-3 ml-3" onClick={nextStep}>Next</button></div>
    </div>
  );
}

export default CompanyDetails;
