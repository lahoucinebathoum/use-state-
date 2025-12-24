import { createRoot } from "react-dom/client";
import { useState } from "react";
import Exercic from "./exrecic1";
import ShowInputValue from "./ShowInputValue";
import DynamiqueStyle from "./DynamiqueStyle";
import ToDoList from "./ToDoList";

function App() {
  const [title, setTitle] = useState("Exercice 1");

  return (
    <>
      <h2>Exercice 1</h2>

      {/* Composant 1 */}
      <Exercic onSendTitle={setTitle} />

      {/* Composant 2 */}
      <ShowInputValue onSend={setTitle} />

      {/* Affichage avec style dynamique */}
      <DynamiqueStyle title={title} />
      <ToDoList onSend={setTitle} />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

