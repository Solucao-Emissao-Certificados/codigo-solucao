import { Link } from "react-router-dom"
import "./formsCard.css"

export default function FormsCard() {
    return(
        <div className="forms-card">
            <Link to='/LoginRepresentante'><button>Representante</button></Link>
            <Link to='/LoginUser'><button>Usuário</button></Link>
        </div>
    )
}