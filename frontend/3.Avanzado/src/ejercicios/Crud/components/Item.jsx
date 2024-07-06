import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../../App.css"

const Item = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [perEdit, setPerEdit] = useState({
    id: "",
    nombre: "",
    casa: "",
    estado: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/items/${id}`)
      .then((res) => {
        setPerEdit(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setPerEdit((el) => ({ ...el, [name]: value }));
    console.log([name], value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (perEdit.nombre && perEdit.casa && perEdit.estado) {
      axios
        .put(`http://localhost:3001/items/${id}`, perEdit)
        .then((response) => {
          console.log(response);
          navigate("/");
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
      <form onSubmit={handleEdit}>
        <div>
          <label>Nombre del Personaje: </label>
          <label>{perEdit.nombre}</label>
          <br />
          <label>Cambiar a: </label>
          <input
            type="text"
            name="nombre"
            value={perEdit.nombre}
            placeholder="Ingrese el edit"
            autoComplete="off"
            onChange={handleChangeEdit}
          />
        </div>
        <br />
        <div>
          <label>Casa del Personaje: </label>
          <label>{perEdit.casa}</label>
          <br />
          <label>Cambiar a: </label>
          <input
            type="text"
            name="casa"
            value={perEdit.casa}
            placeholder="Ingrese el edit"
            autoComplete="off"
            onChange={handleChangeEdit}
          />
        </div>
        <br />
        <div>
          <label>Estado del Personaje: </label>
          <label>{perEdit.estado}</label>
          <br />
          <label>Cambiar a: </label>
          <input
            type="text"
            name="estado"
            value={perEdit.estado}
            placeholder="Ingrese el edit"
            autoComplete="off"
            onChange={handleChangeEdit}
          />
        </div>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Item;
