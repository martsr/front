import '../styles/pages/ContactPage.css'
const ContactPage = (props) =>{
    return(
        <main>
        <div className="contact">
            <div className="contact-info">
                <div className="info">
                    <p> <i className="fa-solid fa-phone"></i> Phone 11-2233-4455
                    </p>
                    <p> <i className="fa-regular fa-envelope"></i> support@insil.com</p>
                    <p><i className="fa-brands fa-instagram mr-1"></i> Instagram @insilart</p>
                    <p><i className="fa-brands fa-twitter mr-1"></i> Twitter @insilart</p>
                </div>
            </div>
            
                <div className="contact-form">
                    <h2>Contact Us</h2>
                    <div className="form-container">
                        <form>
                            <div className="upper-form">
                                <div className="name">
                                    <label for="nom">Name <sup>*</sup></label>
                                    <input type="text" placeholder="Name" name="name" />
                                </div>
                                <div className="email">
                                    <label for="email"> Email <sup>*</sup></label>
                                    <input type="email" placeholder="Email" name="email" />
                                </div>
                            </div>
                            <br/>
                            <div className="lower-form">
                                <label for="text">Message <sup>*</sup></label>
                                <br/>
                                <br/>
                                <textarea placeholder="Message" name="question"></textarea>
                            </div>
                            <br/>
                            <div className="btn-container">
                                <button type="submit" className="contact-btn">Send Message</button>
                            </div>

                        </form>
                    </div>
                </div>
           

        </div>
    </main>
    );
}
export default ContactPage;