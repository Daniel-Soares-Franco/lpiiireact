 import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
 export default function MyNavbar(props){
    return (
        

       
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration: "none", color: "white"}} to={""} >Tarefas</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration: "none", color: "white"}} to={"form"} >Formulario</Link></Nav.Link>
            <Nav.Link ><Link style={{textDecoration: "none", color: "white"}} to={"alunos"} >Alunos</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
 }