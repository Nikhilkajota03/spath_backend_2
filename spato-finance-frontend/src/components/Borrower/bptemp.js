import  Axios  from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { storage } from "../../Firebase";
import baseUrl from "../baseUrl";
import "./B_CSS.css";

const B_Profile = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nationality: "",
    designation: "",
    contactNumber: "",
    identityProof: "",
    addressProof: "",
    companyName: "",
    companyEmail: "",
    companyContactNumber: "",
    companyWebsite: "",
    companyAddress: "",
    certificateOfIncorporation: "",
    MOAAOA: "",
    auditReport: "",
    GST: "",
    director1: "",
    director2: "",
    director3: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  // const handleFileUpload = async () => {
  //   // var fileURLArray = [];

  //   var listOfFiles = [
  //     "identityProof",
  //     "addressProof",
  //     "certificateOfIncorporation",
  //     "MOAAOA",
  //     "auditReport",
  //     "GST",
  //     "director1",
  //     "director2",
  //     "director3",
  //   ];

  //   for (var i = 0; i < listOfFiles.length; ++i) {
  //     let fileObj = formData[listOfFiles[i]];

  //     const uploadTask = storage.ref(`dyuthi/${fileObj.name}`).put(fileObj);
  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progressPercentage = Math.round(
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //         );
  //         console.log(progressPercentage);
  //       },
  //       (err) => {
  //         console.log(err.message);
  //       },
  //       () => {
  //         storage
  //           .ref(`dyuthi/${fileObj.name}`)
  //           .getDownloadURL()
  //           .then((res) => {
  //             setFormData({
  //               ...formData,
  //               [listOfFiles[i]]: res,
  //             });
  //           })
  //           .catch((err) => {
  //             console.log("Error", err);
  //           });
  //         console.log(formData[listOfFiles[i]]);
  //       }
  //     );
  //   }

  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    const documents = {
      identityProof: formData["identityProof"],
      addressProof: formData["addressProof"],
      certificateOfIncorporation: formData["certificateOfIncorporation"],
      MOAAOA: formData["identityProof"],
      auditReport: formData["auditReport"],
      GST: formData["GST"],
      director1: formData["director1"],
      director2: formData["director2"],
      director3: formData["director3"],
    };
    data.append("fullName", formData["fullName"]);
    data.append("email", formData["email"]);
    data.append("nationality", formData["nationality"]);
    data.append("designation", formData["designation"]);
    data.append("contactNumber", formData["contactNumber"]);
    data.append("companyName", formData["companyName"]);
    data.append("companyEmail", formData["companyEmail"]);
    data.append("companyContactNumber", formData["companyContactNumber"]);
    data.append("companyWebsite", formData["companyWebsite"]);
    data.append("companyAddress", formData["companyAddress"]);
    data.append("documents", documents);
    // Perform API call or any other action with the form data
    Axios.post(`${baseUrl}/borrower`, data)
      .then(() => {
        // setSubmitting(false);

        alert("Borrower profile created!");
        // formRef.current.reset();
      })
      .catch((err) => {
        alert("Unsuccessful registration!"+err);
        // setSubmitting(false);
        // formRef.current.reset();
      });
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <h3> Profile </h3>
            </div>

            <div style={{ textAlign: "center" }}>
              <h3> Please fill the following details:</h3>
            </div>
          </div>
          <br />

          <div className="CSS1">
            <Card.Header>
              <h5> Personal details</h5>
            </Card.Header>
            <br />
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                (We'll never share your email with anyone else)
              </Form.Text>
            </Form.Group>

            <Form.Label>Nationality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Country name"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
            <br />
            <Form.Label>Designation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
            <br />
            <Form.Label>Contact number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone n.o"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />

            <br />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an identity proof</Form.Label>
              <Form.Control
                type="file"
                name="identityProof"
                // value={formData.identityProof.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload an address proof</Form.Label>
              <Form.Control
                type="file"
                name="addressProof"
                // value={formData.addressProof.name}
                onChange={handleFileChange}
              />
            </Form.Group>

            <Card.Header>
              <h5> Company details</h5>
            </Card.Header>
            <br />
            {/* <div className="CSS1"> */}
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <br />

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="companyEmail"
                value={formData.companyEmail}
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
              value={formData.companyContactNumber}
              onChange={handleChange}
            />

            <br />
            <Form.Label>Company website</Form.Label>
            <Form.Control
              type="text"
              placeholder="Website"
              name="companyWebsite"
              value={formData.companyWebsite}
              onChange={handleChange}
            />
            <br />

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Company address</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload certificate of incorporation</Form.Label>
              <Form.Control
                type="file"
                name="certificateOfIncorporation"
                // value={formData.certificateOfIncorporation.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload MOA/AOA</Form.Label>
              <Form.Control
                type="file"
                name="MOAAOA"
                // value={formData.MOAAOA.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload audit report</Form.Label>
              <Form.Control
                type="file"
                name="auditReport"
                // value={formData.auditReport.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload GST</Form.Label>
              <Form.Control
                type="file"
                name="GST"
                // value={formData.GST.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Director-1 </Form.Label>
              <Form.Control
                type="file"
                name="director1"
                // value={formData.director1.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Director-2 </Form.Label>
              <Form.Control
                type="file"
                name="director2"
                // value={formData.director2.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Director-3 </Form.Label>
              <Form.Control
                type="file"
                name="director3"
                // value={formData.director3.name}
                onChange={handleFileChange}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>

            <br />
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default B_Profile;
