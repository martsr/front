import { Link } from "react-router-dom";
import '../styles/pages/ExhibitionPage.css'
const ExhibitionsPage = (props) =>{
    return(
        <main>
        <div className="main-container">
            <div className="exhibitions">
                <div className="exhibition">
                    <div className="exh-info">
                        <h2>Thinking in Colour - Ana Scaldaferro</h2>
                        <h4>From February 6th to March 24th </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima corporis
                            aperiam
                            velit iste. Eligendi, assumenda minima? Corporis quisquam aspernatur animi porro totam
                            magni!
                            Saepe voluptates quidem consectetur! Enim, accusamus. Lear more about her work
                            <strong> <Link className="exhibition-link" to="#">here</Link></strong>
                        </p>
                    </div>
                    <div className="exh-imgs"> <img src="img/exhibition-img/hammersaw.jpg" className="exh-img"
                            alt="crystal saw"/></div>

                </div>
                <div className="exhibition">
                    
                    <div className="exh-info">
                        <h2>Road to Kyoto - Naomi Okubo</h2>
                        <h4>From April 3th to May 12th </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima corporis
                            aperiam
                            velit iste. Eligendi, assumenda minima? Corporis quisquam aspernatur animi porro totam
                            magni!
                            Saepe voluptates quidem consectetur! Enim, accusamus. Lear more about her work
                            <strong> <Link className="exhibition-link" to="#">here</Link></strong>
                        </p>
                    </div>
                    <div className="exh-imgs">
                        <img src="img/exhibition-img/img11.png.webp" className="exh-img" alt="shoes sole on sand"/>
                    </div>
                </div>
                <div className="exhibition" >
                    <div className="exh-info">
                        <h2>Exspiravit - Decorum</h2>
                        <h4>From May 15th to June 30th </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima corporis
                            aperiam
                            velit iste. Eligendi, assumenda minima? Corporis quisquam aspernatur animi porro totam
                            magni!
                            Saepe voluptates quidem consectetur! Enim, accusamus. Lear more about her work
                            <strong> <Link className="exhibition-link" to="#">here</Link></strong>
                        </p>
                    </div>
                    <div className="exh-imgs">
                        <img src="img/exhibition-img/img10.png.webp" className="exh-img" alt="watch collage"/>
                    </div>

                </div>
            </div>
        </div>
    </main>
    );
}
export default ExhibitionsPage;