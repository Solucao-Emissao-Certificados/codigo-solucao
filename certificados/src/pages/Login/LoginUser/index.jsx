import { useState } from "react"
import { supabase } from "../../../services/supabase"
import { useNavigate } from "react-router-dom"

import IconUser from "../../../img/IconUser.png"

import "../login.css"
export default function LoginUser() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function VerificarLogin(e) {
        e.preventDefault();
        setMessage('Entrando...');

        const { data, error } = await supabase
            .from('usuarios')
            .select('*')
            .eq('email', email)
            .eq('senha', senha);

        if (error) {
            console.error('Erro ao verificar login:', error);
            setMessage("Erro no login. Tente novamente.");
            return;
        }

        if (data.length > 0) {
            const usuario = data[0];
            console.log('Usuário encontrado: ', data[0]);
            setMessage('Login realizado com sucesso!')
            setTimeout(() => {
                navigate(`/home/${usuarios.id}`)
            }, 1500);
        } else {
            console.log('Usuário não encontrado ou senha incorreta.');
        }

    }


    return (
        <div className="Login">
            <div className="login-container">
                <img src={IconUser} alt="Icone Usuário" className="login-card" />
                <h2 className="login-titulo">Login Usuário</h2>
                <form className="login-form" onSubmit={VerificarLogin}>
                    <label htmlFor="email">
                        Seu Email
                        <input
                            className="login-input"
                            type="email"
                            placeholder="email@email.com"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
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
                            required
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