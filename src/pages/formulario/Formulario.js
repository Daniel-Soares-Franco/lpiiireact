import React from 'react'
import PropTypes from 'prop-types'
import { MeuH3 } from './components/MeuH3';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button, Container } from 'react-bootstrap';
import ClipLoader from "react-spinners/ClipLoader";
import MyBackdrop from '../../shared/components/my-backdrop';
import MyFade from '../../shared/components/my-fade';



function Formulario(props) {
  const [form, setForm] = React.useState({ name: '', curso: '' });
  const [loading, setLoading] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const [showFeed, setShowFeed] = React.useState(false);
  const atualizaForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  const enviaServidor = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
    const res = await fetch('http://localhost:38000/alunos', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(form)
    });
    setTimeout(() => {
      setLoading(false);
      setOk(true);
      setShowFeed(true);
     }, 2000);

    } catch(err) {
      setOk(false);
      setShowFeed(true);
      setLoading(false);
    }

  }
  return (
    <div>
      <MeuH3>Formulário</MeuH3>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Nome
            </Form.Label>
            <Col lg="9" sm="4">
              <Form.Control type="text" defaultValue="Enzo Fernandes" name='name' id='name' value={form.name} onChange={atualizaForm} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
              Curso
            </Form.Label>
            <Col lg="9" sm="4">
              <Form.Control type='text' name='curso' id='curso' value={form.curso} onChange={atualizaForm} />
            </Col>
          </Form.Group>
          <Button variant="secondary" onClick={enviaServidor}>Envia ao Servidor</Button>
        </Form>
        {loading && <ClipLoader
        color={"pink"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      </Container>

      {/*showFeed && <MyBackdrop feed={ok} show={showFeed} cancelShow={() => setShowFeed(false)}  /> */}
      <MyFade in={showFeed} cancelShow={() => setShowFeed(false)}/>
      
      
    </div>

  )
}


export default Formulario
