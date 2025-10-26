import Header from "../../../components/header"
import HomeCards from "../../../components/HomeCards";
import "./homeuser.css"

export default function HomeUser () {
    
    return (
    <div className="HomeUser">
      <Header className="MainHeader"/>
      <HomeCards className="HomeCards"/>
    </div>
  );
}