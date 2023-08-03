import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faGithubSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export const App = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4507e2y", "template_ne6utat", form.current, "zXQCjgoBCAAPo0xFo").then(
      (result) => {
        console.log(result.text);
        setShowConfirmation(true); // Met à jour l'état pour afficher le message de confirmation
        // Redirige l'utilisateur vers la page de confirmation après 2 secondes
        setTimeout(() => {
          navigate("/confirmation");
        }, 5000);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="container-contact">
    <div className="container-email">
      {showConfirmation ? (
        <div>
          <h2>Merci ! Votre message a été envoyé avec succès.</h2>
          <p>Vous serez redirigé vers la page de confirmation dans quelques instants...</p>
        </div>
      ) : (
        <form className="form-email" ref={form} onSubmit={sendEmail}>
          <label className="label-email">Name</label>
          <input className="input-email" type="text" name="name" required />
          <label className="label-email">Email</label>
          <input className="input-email" type="email" name="email" required />
          <label className="label-email">Message</label>
          <textarea
            name="textarea-email"
            placeholder="Type your message here (200 characters maximum)"
            rows="5"
            column="30"
            minLength="20"
            maxLength="400"
            autoCapitalize="words"
            required
          ></textarea>
          <button className="button-contact" type="submit">
            Envoyer
          </button>
        </form>
      )}

      {/* Additional code starts here */}
      <div id="wrapper">
        <div className="box-area">
          <div id="box-front" className="box">
            <a href="mailto:nacim.sereir@gmail.com" className="button glow-button" target="_blank">
              <FontAwesomeIcon icon={faGoogle} style={{ fontSize: "95px" }} />
            </a>
          </div>
          <div id="box-right" className="box">
            <a href="https://www.linkedin.com/in/nacim-sereir/" className="button glow-button" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "95px" }} />
            </a>
          </div>
          <div id="box-back" className="box">
            <a href="https://github.com/Sereir" className="button glow-button" target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: "95px" }} />
            </a>
          </div>
          <div id="box-left" className="box">
            <a href="tel:+33 651684603" className="button glow-button" target="_blank">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "95px" }} />
            </a>
          </div>
          <div id="box-bottom" className="box"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
