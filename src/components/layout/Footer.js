import '../../styles/layout/Footer.css'

const Footer = (props) =>{
    return (
        
        <footer>
        <div className="foter-container">
            <div className="designer">
                <p>© 2023 Martina Rivero</p>
            </div>
            <div className="logo">
                <a>
                    <i className="fa-solid fa-i"></i>
                </a>
            </div>
            <div className="foter-links">
                <ul>
                   <li className="nav-item">
                    
                    <i className="fa-brands fa-instagram mr-1"></i>
                    
                    </li>
                 <li className="nav-item"><i className="fa-brands fa-twitter mr-1"></i>
                    </li> 
                </ul>
            </div>
        </div>
    </footer>
    
    );
}

export default Footer;