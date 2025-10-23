import iconUser from "../../../../img/IconUser.png"

import "../maincards.css"

export default function UserCard() {
    return(
        <div className="main-card">
            <img src={iconUser} alt="Icone do Usuário" className="img-card"/>
            <h2>Usuário</h2>
            <p>
                Responsável os certificados recebidos em seu e-mail vinculado,
                realizar a assinatura eletrônica e retornar um certificado ao
                representante.
            </p>
        </div>
    )
}