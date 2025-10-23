import IconRepresentante from "../../../img/IconRepresentante.png"

import "../login.css"
export default function LoginRepresentante() {
    return(
        <div className="Login">
            <img src={IconRepresentante} alt="Icone Representante" />
            <h2 className="login-titulo">Login Representante</h2>
            <form className="login-form">
                <label htmlFor="email">
                    Seu Email
                    <input className="login-input" type="email" placeholder="email@email.com" id="email"/>
                </label>
                

                <label htmlFor="password">
                    Sua Senha
                    <input className="login-input" type="password" id="password"/>
                </label>

                <label htmlFor="remember">
                    <input type="checkbox" id="remember"/>
                    Manter-me logado
                </label>
                
                <button className="login-button">Logar</button>
            </form>
        </div>
    )
}