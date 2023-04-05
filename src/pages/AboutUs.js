import '../styles/pages/AboutUs.css'
const AboutUs = (props) =>{
    return(
        <main>
        <div className="main-container">
            <div className="history">
                <div className="history-text">
                    <h2>History</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, maiores quae. Modi nulla aliquid
                        maiores a aliquam ducimus fuga praesentium repudiandae aspernatur quibusdam velit dolorum
                        laborum enim, corrupti autem ea! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cumque fugiat magni ratione id qui illo temporibus tempore odio repellat aut cupiditate aperiam
                        deserunt excepturi, tenetur dolorum modi tempora molestias sint. Lorem ipsum dolor sit, amet
                        consectetur adipisicing elit. Maiores, dicta deleniti iusto tenetur ullam omnis adipisci
                        perferendis placeat non at praesentium consequuntur corporis facilis cum repudiandae nostrum
                        quis dolorum aliquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dicta
                        perferendis, blanditiis beatae ea corporis nisi, totam similique cumque natus porro quidem at
                        earum esse unde! Vitae iusto quam illo.</p>
                </div>
                <div className="history-img">
                    <img src="img/mission.jpg" id="place" alt="picture of insil gallery"/>
                </div>
            </div>

            <div className="staff-container">
                <div className="staff-title">
                    <h2>Staff</h2>
                </div>
                <div className="members">
                    <div className="member" >
                        <img src="img/profiles/img5.jpg" alt="Victoria"/>
                        <h5>Victoria Malle</h5>
                        <h6>Founder/ Creative Director</h6>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem aut reprehenderit
                            perferendis nesciunt excepturi! Qui eos iure aliquam repudiandae dolore amet recusandae, et
                            optio? Odit dolor quos doloribus nemo!</p>
                    </div>
                    <div className="member" >
                        <img src="img/profiles/img2.jpg" alt="Juana"/>
                        <h5>Juana Lacroix</h5>
                        <h6>Chief of Staff</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae accusantium corporis
                            voluptate dolore nam dolores delectus error saepe ab quam quae rerum deleniti veniam itaque,
                            odit, laudantium, facilis iusto.</p>
                    </div>
                    <div className="member" >
                        <img src="img/profiles/img4.jpg" alt="Salvatore"/>
                        <h5>Salvatore Damo</h5>
                        <h6>Founder</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad eaque temporibus harum,
                            voluptatibus, obcaecati vel quisquam quia impedit perferendis magni sequi assumenda
                            perspiciatis praesentium at illo recusandae quam </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
export default AboutUs;