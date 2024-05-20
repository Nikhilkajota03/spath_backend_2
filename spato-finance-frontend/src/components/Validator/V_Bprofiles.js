import React,{useState,useEffect} from "react";
import { Button,  Container } from "react-bootstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Axios from "axios"
import baseUrl from "../baseUrl";
const V_Bprofiles = () => {

  const [borrowers, setBorrowers] = useState([])
  const [first, setfirst] = useState(1)

  //Fetching borrowers from database
  useEffect(() => {
    Axios.get(`${baseUrl}/borrower`).then((res)=>{
      
      setBorrowers(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
      alert("Could not fetch borrowers! Try again")
    })
  }, [first])

  return (
    <div className="page">
      <Container>
        <br />
        <div >
          
            <div style={{ textAlign: "center" }}>
              <h3> List of all Borrower profiles</h3>
            </div>
         
        </div>

        {borrowers.length!=0?(<Table className="mt-0 mt-md-5">
          <Thead>
            <Tr>
              <Th>Sl N.o</Th>
              <Th>Details</Th>
              <Th>Approve</Th>
              <Th>Reject</Th>
            </Tr>
          </Thead>
          <Tbody>
           {borrowers.map((borrower,index)=>( <Tr className="mb-4  border border-white rounded mb-md-7">
              <Td className="p-2">{index+1}</Td>
              <Td className="p-2">{borrower.companyName}</Td>

              <Td className="p-2">
                <Button variant="primary" className="approveButton">Approve</Button>
              </Td>
              <Td className="p-2">
                <Button className="reject">Reject</Button>
              </Td>
            </Tr>))}
        
          </Tbody>
        </Table>):<p className="content">No borrowers registered!</p>}
      </Container>
    </div>
  );
};

export default V_Bprofiles;
