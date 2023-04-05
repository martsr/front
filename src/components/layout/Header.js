import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import HomePage from "../../pages/HomePage";
import ContactPage from "../../pages/ContactPage";
import AboutUs from "../../pages/AboutUs";
import GalleryPage from "../../pages/GalleryPage";
import ExhibitionsPage from "../../pages/ExhibitionsPage";
const Header = (props) =>{
    return (
        
         <header>
            <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/aboutUs" element = {<AboutUs/>}/>
        <Route path="/contact" element= {<ContactPage/>}/>
        <Route path="/exhibition" element = {<ExhibitionsPage/>}/>
        <Route path="/gallery" element = {<GalleryPage/>}/>
      </Routes>
      </BrowserRouter>
    </header>
       
        
    );
}

export default Header;