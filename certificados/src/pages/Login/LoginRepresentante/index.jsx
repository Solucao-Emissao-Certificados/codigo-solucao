import { useState } from "react"
import { supabase } from "../../../services/supabase"
import { useNavigate } from "react-router-dom"

import IconRepresentante from "../../../img/IconRepresentante.png"

import "../login.css"
export default function LoginRepresentante() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function VerificarRepresentante(e) {
        e.preventDefault();
        setMessage('Entrando...');

        const { data, error } = await supabase
            .from('representante')
            .select('*')
            .eq('email', email)
            .eq('senha', senha);

        if (error) {
            console.error('Erro ao verificar login:', error);
            setMessage("Erro no login. Tente novamente.");
            return;
        }

        if (data.length > 0) {
            const representante = data[0];
            console.log('Representante encontrado: ', data[0]);
            setMessage('Login realizado com sucesso!')
            setTimeout(() => {
                navigate(`/homerepresentante/${representante.id}`)
            }, 1500)
        } else {
            console.log('Dados não encontrado ou senha incorreta.');
        }
    }
    return (
        <div className="Login">
            <div className="login-container">
                <img src={IconRepresentante} alt="Icone Representante" />
                <h2 className="login-titulo">Login Representante</h2>
                <form className="login-form" onSubmit={VerificarRepresentante}>
                    <label htmlFor="email">
                        Seu Email
                        <input 
                        className="login-input" 
                        type="email" 
                        placeholder="email@email.com" 
                        id="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </label>

                    <label htmlFor="password">
                        Sua Senha
                        <input 
                        className="login-input" 
                        type="password" 
                        id="password" 
                        onChange={(e) => setSenha(e.target.value)}
                        value={senha}
                        />
                    </label>

                    <label htmlFor="remember">
                        <input type="checkbox" id="remember" />
                        Manter-me logado
                    </label>

                    <button className="login-button" type="submit">Logar</button>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    )
}