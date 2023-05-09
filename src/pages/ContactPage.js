import "../styles/pages/ContactPage.css";
import { useState } from "react";
import axios from "axios";
const ContactPage = (props) => {
  const initialForm = {
    name: "",
    email: "",
    question: "",
  };
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contact",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) setFormData(initialForm);
  };
  return (
    <main>
      <div className="contact">
        <div className="contact-info">
          <div className="info">
            <p>
              {" "}
              <i className="fa-solid fa-phone"></i> Phone 11-2233-4455
            </p>
            <p>
              {" "}
              <i className="fa-regular fa-envelope"></i> support@insil.com
            </p>
            <p>
              <i className="fa-brands fa-instagram mr-1"></i> Instagram
              @insilart
            </p>
            <p>
              <i className="fa-brands fa-twitter mr-1"></i> Twitter @insilart
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Contact Us</h2>
          <div className="form-container">
            <form onSubmit={handlesubmit}>
              <div className="upper-form">
                <div className="name">
                  <label for="nom">
                    Name <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="email">
                  <label for="email">
                    {" "}
                    Email <sup>*</sup>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
              <div className="lower-form">
                <label for="text">
                  Message <sup>*</sup>
                </label>
                <br />
                <br />
                <textarea
                  name="question"
                  placeholder="Your Message Here"
                  value={formData.question}
                  onChange={handleChange}
                ></textarea>
              </div>
              <br />
              {sending ? <p>Sending...</p> : null}
              {msg ? <p>{msg}</p> : null}
              <div className="btn-container">
                <button type="submit" className="contact-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
