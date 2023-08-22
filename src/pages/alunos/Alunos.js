import React from 'react'
import { Table } from 'react-bootstrap';

function Alunos(props) {
  const [alunos, setAlunos] = React.useState(null)
  const [isLoading, setLoading] = React.useState(false);
  const carregaAlunos = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const res = await fetch("http://localhost:38000/alunos")
        const serverData = await res.json();
        setAlunos(serverData);
      }, 2000)
     
    } catch(err){
      console.log(err);
      setLoading(false);

    } 
    
  }

  React.useEffect(() => {
    carregaAlunos();
  }, [])
  return (
    <Table  bordered hover>
        <thead>
            <th>Id</th>
            <th>Nome</th>
            <th>Curso</th>
        </thead>
        <tbody>
          {alunos && alunos.map(aluno => (
            <tr>
              <td>{aluno.id}</td>
              <td>{aluno.name}</td>
              <td>{aluno.curso}</td>
            </tr>
          ))}
        </tbody>
    </Table>
  )
}


export default Alunos
