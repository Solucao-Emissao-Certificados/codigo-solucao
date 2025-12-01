import Header from "../../../components/Header"
import HomeCertificados from "../../../components/HomeCertificados"
import Footer from "../../../components/Footer"

import "./homerepresentante.css"

export default function HomeRepresentante() {
    return (
        <div className="HomeRepresentante">
            <Header className="MainHeader"/>
            <HomeCertificados className="HomeCertificados"/>
            <Footer className="footer"/>
        </div>
    )
}