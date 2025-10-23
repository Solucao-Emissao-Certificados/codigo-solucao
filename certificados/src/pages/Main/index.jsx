import Header from "../../components/header"
import FormsCard from "../../components/MainPage/FormsCard"
import MainBody from "../../components/MainPage/MainBody"

import "./main.css"

export default function Main() {
    return(
        <div className="Main">
            <Header className="MainHeader"/>
            <MainBody className="MainBody"/>
            <FormsCard className="MainForms"/>
        </div>
    )
}