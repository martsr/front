import { NavLink } from "react-router-dom";
import '../../styles/layout/Nav.css'
const Nav = (props) => {
    return (

        <nav className="navbar">
            <div className="header-container ">
                <div className="menu">
                    <ul>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? "activo":undefined} to="/gallery">Virtual Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? "activo":undefined} to="/exhibition">Exhibitions</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className={({isActive})=> isActive ? "activo":undefined} to="/"><i className="fa-solid fa-i"></i> Insel</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? "activo":undefined} to="/aboutUs">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({isActive})=> isActive ? "activo":undefined} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    );
}

export default Nav;