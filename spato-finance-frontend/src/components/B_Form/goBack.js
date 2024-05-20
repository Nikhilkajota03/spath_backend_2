import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

function GoBack({ formData, prevStep, onSubmit, submitting }) {
  console.log(formData);
  return (
    <>
      {submitting ? (
        <div className="content">
          <div color="rgba(255, 244, 169, 1)">
            <p>Do not refresh.Uploading your details...</p>
            <p>This will take a minute or two</p>
          </div>
          <InfinitySpin width="200" color="#4cb8c4" />
        </div>
      ) : (
        <>
          {" "}
          <div className="container goBack p-5">
            <h2 className="text-center mb-5">Review submission</h2>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Full Name</td>
                  <td>{formData.fullName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{formData.email}</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>{formData.nationality}</td>
                </tr>
                <tr>
                  <td>Designation</td>
                  <td>{formData.designation}</td>
                </tr>
                <tr>
                  <td>Contact Number</td>
                  <td>{formData.contactNumber}</td>
                </tr>
                <tr>
                  <td>Identity Proof</td>
                  <td>{formData.identityProof.name}</td>
                </tr>
                <tr>
                  <td>Address Proof</td>
                  <td>{formData.addressProof.name}</td>
                </tr>
                <tr>
                  <td>Company Name</td>
                  <td>{formData.companyName}</td>
                </tr>
                <tr>
                  <td>Company Email</td>
                  <td>{formData.companyEmail}</td>
                </tr>
                <tr>
                  <td>Company Contact Number</td>
                  <td>{formData.companyContactNumber}</td>
                </tr>
                <tr>
                  <td>Company Website</td>
                  <td>{formData.companyWebsite}</td>
                </tr>
                <tr>
                  <td>Company Address</td>
                  <td>{formData.companyAddress}</td>
                </tr>
                <tr>
                  <td>Certificate of Incorporation</td>
                  <td>{formData.certificateOfIncorporation.name}</td>
                </tr>
                <tr>
                  <td>MOAAOA</td>
                  <td>{formData.MOAAOA.name}</td>
                </tr>
                <tr>
                  <td>Audit Report</td>
                  <td>{formData.auditReport.name}</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>{formData.GST.name}</td>
                </tr>
                <tr>
                  <td>Director 1</td>
                  <td>{formData.director1.name}</td>
                </tr>
                <tr>
                  <td>Director 2</td>
                  <td>{formData.director2.name}</td>
                </tr>
                <tr>
                  <td>Director 3</td>
                  <td>{formData.director3.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
      <div style={{display:"flex",justifyContent:"space-between"}} className="bmint pb-5 px-5" >

          <button className="btn" onClick={prevStep}>Previous</button>
          <button className="btn" onClick={onSubmit}>Submit</button></div>
        </>
      )}
    </>
  );
}

export default GoBack;
