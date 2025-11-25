import { useState } from "react"
import { supabase } from "../../../services/supabase"
import { useNavigate } from "react-router-dom"

export default function RegisterRepresentante() {
    const [nome, setNome] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [senha, SetSenha] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    async function createRepresentante(e) {
        e.preventDefault();
        setMessage('Entrando...');

        const { data, error } = await supabase
        .from("pessoa")
        .insert([
            { nome, tel, email, senha, tipo: "representante"}
        ]);

        if (error) {
            setMessage("Erro ao cadastrar representante")
        }

        setMessage("Representante criado!")
        if (data.length > 0) {
            const representante = data[0];
            console.log('Representante encontrado: ', data[0]);
            setMessage('Login realizado com sucesso!')
            setTimeout(() => {
                navigate(`/homerepresentante/${representante.id}`)
            }, 1500)
        } else {
            console.log('Dados não criado ou senha incorreta.');
        }
    }

    return (
        <div>
            <div>
                <h2>Cadastro User</h2>
                <form onSubmit={createRepresentante}>
                    <label>
                        Nome
                        <input 
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        />
                    </label>
                    <label>
                        Telefone
                        <input 
                        type="telefone"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Senha
                        <input 
                        type="password"
                        value={senha}
                        onChange={(e) => SetSenha(e.target.value)}
                        />
                    </label>
                    <button>Criar</button>
                </form>
                <p>{message}</p>
            </div>
        </div>
    )
}