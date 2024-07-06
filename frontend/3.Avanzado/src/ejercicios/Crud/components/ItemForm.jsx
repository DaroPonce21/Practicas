import axios from "axios";
import { useState } from "react";
import "../../../App.css"

const ItemForm = () => {
  const [input, setInput] = useState({
    nombre: "",
    casa: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((el) => ({ ...el, [name]: value }));
    console.log([name], value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.nombre && input.casa && input.estado) {
      axios
        .post("http://localhost:3001/items", input)
        .then((response) => {
          console.log(response);
          setInput({
            nombre: "",
            casa: "",
            estado: "",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Debe completar todos los campos");
    }
  };

  return (
    <div>
      <nav>
        <button>
          <a href="/">Home</a>
        </button>
      </nav>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Personaje: </label>
          <input
            type="text"
            name="nombre"
            value={input.nombre}
            placeholder="Personaje..."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Casa: </label>
          <input
            type="text"
            name="casa"
            value={input.casa}
            placeholder="Gryffindor..."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Estado: </label>
          <input
            type="text"
            name="estado"
            value={input.estado}
            placeholder="Vivo..."
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ItemForm;
