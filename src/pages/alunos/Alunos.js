import React from 'react'
import PropTypes from 'prop-types'

function Alunos(props) {
  const [alunos, setAlunos] = React.useState(null)
  const [isLoading, setLoading] = React.useState(false);
  const carregaAlunos = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:38000/alunos")
      const serverData = await res.json();
      setAlunos(serverData);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    carregaAlunos();
  }, [])
  return (
    <table>
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
    </table>
  )
}


export default Alunos
