import '../styles/pages/HomePage.css'
const HomePage = (props) =>{
    return(
        <main>
        <div className="main-container">
            <div className="intro-container">
                <div className="intro">
                    <p>
                    <h1><i className="fa-solid fa-i"></i> Insel Art Gallery </h1>
                    </p>
                    <p> Thinking in Colour From February 6th to March 24th
                    </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui
                        incidunt officia fugiat distinctio assumenda possimus quod nihil voluptas unde! Consectetur
                        officiis dolores assumenda. Labore unde assumenda illo quisquam fuga.</p>
                </div>
                <div className="intro-img">
                    <img src="img/exhibition.jpg" alt="Picture of Insel physical location"/>
                </div>
            </div>
            <div className="pic-collage">
                <div className="subcollage">
                    <div className="subart1">
                        <img src="img/collage/fragile.webp" className="fragile"
                            alt="brow boxes painted with spraypaint saying fragile"/>
                    </div>
                    <div className="subart2">
                            <div>
                            <img src="img/collage/whale.jpg" className="miniart" alt="abstract blue drawing"/>
                        </div>
                        <div>
                            <img src="img/collage/Smallresinsdoing.jpg" className="miniart" alt="pouring resin"/>
                        </div>
                    </div>
                </div>
                <div className="subcollage">
                        <div>
                        <img src="img/collage/homemade.jpg" className="column-art" alt="paiting strikes"/>
                    </div>
                    <div>
                        <img src="img/collage/Basketball.jpg" className="column-art" alt="Basketball drawing"/>
                    </div>
                </div>
            </div>

        </div>
    </main>
        )
}
export default HomePage;