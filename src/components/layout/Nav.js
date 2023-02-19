import { Link } from "react-router-dom";
const Nav = (props) => {
    return (

        <nav className="navbar">
            <div className="header-container ">
                <div className="menu">
                    <ul>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Virtual Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/exhibition">Exhibitions</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/"><i className="fa-solid fa-i"></i>Insel</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutUs">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    );
}

export default Nav;