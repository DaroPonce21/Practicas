//Estados y Eventos: Crea un botón que, al ser presionado, cambie el texto mostrado en un componente.

import { useState } from "react";

const BottonState = () => {
  const [texto, setTexto] = useState("Programando");
  const handleChange = (e) => {
    e.preventDefault();
    if (texto === "Programando") {
      setTexto("Jugando Lolcito");
    } else {
      setTexto("Programando");
    }
  };

  return (
    <div>
      <h4>{texto}</h4>
      <button onClick={handleChange}>Cambiar</button>
    </div>
  );
};

export default BottonState;
