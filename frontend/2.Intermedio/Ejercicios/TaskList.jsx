//Lista de Tareas: Crea una aplicación de lista de tareas donde puedas agregar y eliminar tareas. Utiliza el estado de React para manejar la lista de tareas.

import { useState } from "react";

const TaskList = () => {
  const [tarea, setTarea] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setTarea(e.target.value);
    console.log(tarea);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tarea) {
      setList([...list, tarea]);
      setTarea("");
      console.log(list);
    } else {
      return console.log("no hay tarea");
    }
  };

  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresar tarea..."
          value={tarea}
          onChange={handleChange}
        />
        <button type="submit">Ingresar</button>
      </form>

      <br />
      <br />
      <ul>
        {list.map((t, index) => (
          <div key={index}>
            <li>{t}</li>
            <button onClick={() => handleDelete(index)}>Borrar</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
