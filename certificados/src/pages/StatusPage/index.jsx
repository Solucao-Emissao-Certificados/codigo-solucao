import Header from "../../components/Header"
import MainStatus from "../../components/MainPage/MainStatus"
import Footer from "../../components/Footer"

export default function StatusPage() {
    return(
        <div>
            <Header className="MainHeader"/>
            <MainStatus />
            <Footer />
        </div>
    )
}