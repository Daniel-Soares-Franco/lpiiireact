import React from 'react'
import PropTypes from 'prop-types'

function Formulario(props) {
  const [form, setForm] = React.useState({name: '', curso: ''});
  const atualizaForm = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const enviaServidor = (e) => {
    e.preventDefault();
    fetch('http://localhost:38000/alunos', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(form)
    }).then(r => console.log("Enviado com sucesso!"))
  }
  return (
    <div>
      <h3>Formulario</h3>
      <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' id='name' value={form.name} onChange={atualizaForm} />
      </div>
      <div>
        <label htmlFor='curso'>Curso</label>
        <input type='text' name='curso' id='curso' value={form.curso}  onChange={atualizaForm}/>
      </div>
      <button onClick={enviaServidor}>Envia ao Servidor</button>
      </form>
    </div>
    
  )
}


export default Formulario
