import { Link } from "react-router-dom"
import RepresentanteCard from "../MainCards/RepresentanteCard"
import UserCard from "../MainCards/UserCard"

import "./formsCard.css"

export default function FormsCard({ className }) {
    return(
        <div className={className}>
            <Link to='/loginrepresentante' className="link-representante-card">
                < RepresentanteCard />
            </Link>
            <Link to='/loginuser' className="link-user-card">
                < UserCard />
            </Link>
        </div>
    )
}
