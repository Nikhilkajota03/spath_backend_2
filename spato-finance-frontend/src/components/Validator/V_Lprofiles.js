import React, { useState,useEffect } from "react";
import { Table, Button, Form, Card, Container } from "react-bootstrap";
import Axios from "axios"
import baseUrl from "../baseUrl";

const V_Lprofiles = () => {

  const [lenders, setLenders] = useState([])
  const [first, setfirst] = useState(1)

  //Fetching lenders from database
  useEffect(() => {
    Axios.get(`${baseUrl}/lender`).then((res)=>{
      console.log(res)
      setLenders(res.data)
    }).catch(err=>{
      console.log(err)
      alert("Could not fetch lenders! Try again")

    })
  }, [first])
  

  return (
    <div className="page bmint">
      <Container>
        <Form>
          <br />
          <div>

            <div style={{ textAlign: "center" }}>
              <h1>List of all lender profiles</h1>
            </div>

          </div>
        </Form>
      </Container>
      <Container>
        {lenders.length!=0?<Table striped bordered hover>
          <thead>
            <tr>
              <th>Sl N.o</th>

              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {lenders.map((lender,index) => (<tr>
              <td>{index+1}</td>
              <td>{lender.fullName}</td>
            </tr>)) 
            }
         
        </tbody>
       
      </Table>:<p className="content">No lenders registered!</p>}
    </Container>
    </div >
  );
};

export default V_Lprofiles;
