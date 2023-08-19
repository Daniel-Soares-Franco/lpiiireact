import React from "react";

export function carregaAlunos(props) {
    carregaAlunos.propTypes = []
    const carrega = () => {
        fetch("http://localhost/38000/alunos")
        .then(res => res.json())
        .then(serverData => setDados(serverData))
    };
    const [dados, setDados] = React.UseState([]);
    React.UseEffect(() => {
        carrega();
    }, [])

    return (
            <div>
                {JSON.stringify(dados)}
            </div>
        )
};

export function criaAlunos(props) {
    const submeter = (e) => {e.preventDefault();}
    fetch("http://localhost/38000/alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: "<NAME>",
            email: "<EMAIL>"
        })
    })
    .then(res => res.json())
}