import RepresentanteEmpty from "../../../img/RepresentanteEmpty.png"
import "./emptyrepresentante.css"

export default function EmptyRepresentante() {
    return (
        <div className="non-certificado-home">
            <img src={RepresentanteEmpty} alt="icone de certificados vazios" className='non-home-img' />
            <h2>Bem vindo!</h2>
            <p>
                Parece que você ainda não possui nenhum certificado criado... <br/>
                Clique no botão abaixo para adicionar um novo certificado
            </p>
            <button className="non-certificados-button">Adicionar novo certificado!</button>
        </div>
    )
}