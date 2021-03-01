import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Container, Row ,Col} from 'reactstrap';
import MyCard from './MyCard';
import './App.css';

const App = () => {

  const [details,setDetails]=useState({});

  const fetchDetails=async ()=>{
    const {data}=await axios.get('https://randomuser.me/api/');
    const details=data.results[0];
    setDetails(details);
  }

  useEffect(()=>{
    fetchDetails();
  },[])
  return (
   <Container fluid className="bg-primary App p-4">
     <Row>
       <Col md={4} className="offset-md-4 mt-4">
         <MyCard details={details} />
       </Col>
     </Row>
   </Container>
  )
}

export default App
