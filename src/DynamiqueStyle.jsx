import { useState } from "react";

export default function DynamiqueStyle() {
  const [textTransform, setTextTransform] = useState("capitalize");
  const [color, setColor] = useState("blue");

  return (
    <>
      <section>
        <h6>SCREEN</h6>
        <div
          style={{
            border: "solid 1px green",
            textAlign: "center",
            textTransform: textTransform,
            backgroundColor: color, // utilisation du state color
            padding: "20px", // juste pour mieux voir
          }}
        >
          <h1>abc abc</h1>
        </div>

        <section>
          <button
            onClick={() => {
              setColor(color === "blue" ? "red" : "blue"); // toggle blue/red
            }}
          >
            Change Color
          </button>
        </section>
      </section>

      <section>
        <h6>UPPERCASE / LOWERCASE</h6>
        <button
          onClick={() => {
            setTextTransform("uppercase");
          }}
        >
          To UPPERCASE
        </button>
        <button
          onClick={() => {
            setTextTransform("lowercase");
          }}
        >
          To lowercase
        </button>
        <button
          onClick={() => {
            setTextTransform("capitalize");
          }}
        >
          To Capitalize
        </button>
      </section>
    </>
  );
}
