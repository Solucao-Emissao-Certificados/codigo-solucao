import IconRepresentante from "../../../img/IconRepresentante.png"

import "../login.css"
export default function LoginRepresentante() {
    return(
        <div className="Login">
            <img src={IconRepresentante} alt="Icone Representante" />
            <h2>Login Representante</h2>
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