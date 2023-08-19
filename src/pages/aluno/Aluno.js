import React from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom';

function Aluno(props) {
  const {id} = useParams();
  const [aluno, setAluno] = React.useState(null);

  const carregaAluno = async () => {
    
    const res = await fetch('http://localhost:38000/alunos/' + id);
    const data = await res.json();
    setAluno(data);

  }

  React.useEffect(() => {
    carregaAluno();
  }, [])
  
  return (
    <div>
      {aluno && 
      <form>
      Name: <input name='name' value={aluno.name}  /> <br />
      Curso: <input name='curso' value={aluno.curso}/>
      </form>}
    </div>
  )
}


export default Aluno
