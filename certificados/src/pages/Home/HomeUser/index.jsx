import Header from "../../../components/Header";
import HomeCards from "../../../components/HomeCards";
import Footer from "../../../components/Footer";
import "./homeuser.css"

export default function HomeUser () {
    
    return (
    <div className="HomeUser">
      <Header className="MainHeader"/>
      <HomeCards className="HomeCards"/>
      <Footer className="footer"/>
    </div>
  );
}