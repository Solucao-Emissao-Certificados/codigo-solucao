import Header from "../../../components/Header"
import HomeCertificados from "../../../components/HomeCertificados"

import "./homerepresentante.css"

export default function HomeRepresentante() {
    return (
        <div className="HomeRepresentante">
            <Header className="MainHeader"/>
            <HomeCertificados className="HomeCertificados"/>
        </div>
    )
}