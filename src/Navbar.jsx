import "./Navbar.css";
import { FaEnvelope } from "react-icons/fa";

export default function Navbar({ lang, setLang }) {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">Agadir Activities</div>

        <nav className="menu">
          <a href="#contact">{lang === "fr" ? "Contact" : "Contact"}</a>
        </nav>

        <div className="navbar-right">
          <span className="email">
            <FaEnvelope /> agadiractivities2019@gmail.com
          </span>

          <div className="lang-switch">
            <button onClick={() => setLang("fr")}>FR</button>
            <button onClick={() => setLang("en")}>EN</button>
          </div>
        </div>

      </div>
    </header>
  );
}
