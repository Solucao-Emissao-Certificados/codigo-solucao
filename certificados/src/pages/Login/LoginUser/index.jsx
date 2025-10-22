import IconUser from "../../../img/IconUser.png"

import "../login.css"
export default function LoginUser() {
    return(
        <div className="Login">
            <img src={IconUser} alt="Icone Usuário" />
            <h2>Login Usuário</h2>
            <form className="login-form">
                <label>Seu Email</label>
                <input className="login-input" type="email" placeholder="email@email.com"/>

                <label>Sua Senha</label>
                <input className="login-input" type="password" />

                <label htmlFor="remember">
                    <input type="checkbox" id="remember"/>
                    Manter-me logado
                </label>
                
                <button className="login-button">Logar</button>
            </form>
        </div>
    )
}