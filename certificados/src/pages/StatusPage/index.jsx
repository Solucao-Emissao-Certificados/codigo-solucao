import Header from "../../components/Header"
import MainStatus from "../../components/MainPage/MainStatus"
import Footer from "../../components/Footer"

import "./statuspage.css"

export default function StatusPage() {
    return(
        <div className="status">
            <Header className="MainHeader"/>
            <MainStatus className="status-page"/>
            <Footer className="footer"/>
        </div>
    )
}