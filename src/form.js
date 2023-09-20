import React from "react";

export default function form(props) {
    const inicio = {email: "email", password: "password", name: "name"}
    const [form, setForm] = React.useState(inicio)
    const atualizaForm = (e) => {
        const {name, value} = e.target;
        const novoForm = {...form, [name]: value};
        setForm(novoForm);
    }

    return (
            <form>
                email: <input name="email" value={form.email} onChange={atualizaForm}></input>
                password: <input name="password" value={form.password} onChange={atualizaForm}></input>
                name: <input name="name" value={form.name} onChange={atualizaForm}></input>
                <div>
                    {JSON.stringify(form)}
                </div>
            </form>
        )
}