import iconRepresentante from "../../../../img/IconRepresentante.png"
import { Link } from "react-router-dom"

import "../maincards.css"

export default function RepresentanteCard() {
    return(
        <div className="main-card">
            <img src={iconRepresentante} alt="Icone do Representante" className="img-card"/>
            <h2>Representante</h2>
            <p>
                Responsável por criar certificados, atribuí-los a usuário e receber
                de volta os documentos assinados.
            </p>
        </div>
    )
}