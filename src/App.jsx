import { useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Contact lang={lang} />
    </>
  );
}

export default App;
