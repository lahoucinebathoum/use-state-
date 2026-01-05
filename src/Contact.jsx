import "./Contact.css";

export default function Contact({ lang }) {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-map">
          <iframe
            title="Agadir Map"
            src="https://www.google.com/maps?q=Agadir&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        <div className="contact-form">
          <h2>
            {lang === "fr"
              ? "Nous aimerions avoir de vos nouvelles !"
              : "We’d Love To Hear From You!"}
          </h2>

          <form>
            <label>{lang === "fr" ? "Nom" : "Name"}</label>
            <input
              type="text"
              placeholder={lang === "fr" ? "Votre nom" : "Your name"}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder={lang === "fr" ? "Votre email" : "Your email"}
            />

            <label>{lang === "fr" ? "Message" : "Message"}</label>
            <textarea
              placeholder={lang === "fr" ? "Votre message" : "Your message"}
            ></textarea>

            <button type="submit">
              {lang === "fr" ? "Envoyer" : "Send"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
