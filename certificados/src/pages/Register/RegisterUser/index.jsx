import { useState } from "react"
import { supabase } from "../../../services/supabase"
import { useNavigate } from "react-router-dom"

export default function RegisterUser() {
    const [nome, setNome] = useState("")
    const [tel, setTel] = useState("")
    const [email, setEmail] = useState("")
    const [senha, SetSenha] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    async function createUser(e) {
        e.preventDefault();
        setMessage('Entrando...');

        const { data, error } = await supabase
        .from("pessoa")
        .insert([
            { nome, tel, email, senha, tipo: "usuario"}
        ])
        .select();

        if (error) {
            setMessage("Erro ao cadastrar usuário")
        }

        setMessage("Usuário cadastrado")
        if (data.length > 0) {
            const usuarios = data[0];
            setMessage('Cadastro realizado com sucesso!')
            setTimeout(() => {
                navigate(`/homeuser/${usuarios.id}`)
            }, 1500)
        } else {
            console.log('Usuário não criado ou senha incorreta.');
        }
    }

    return (
        <div>
            <div>
                <h2>Cadastro User</h2>
                <form onSubmit={createUser}>
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