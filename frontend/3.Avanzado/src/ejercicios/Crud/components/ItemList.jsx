// ItemList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import "../../../App.css"; 

const ItemList = () => {
  const [list, setList] = useState([]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/items/${id}`)
      .then((response) => {
        console.log(response);
        setList(list.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios({
      url: "http://localhost:3001/items",
    })
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <nav>
        <button>
          <a href="/form">Crear</a>
        </button>
      </nav>
      <div>
        <h1>Mundo Magico de Harry Potter</h1>
      </div>
      <div>
        <h4>Tu Lista Personal</h4>
      </div>
      <ul>
        {list.map((item) => (
          <div key={item.id}>
            <li>
              <div>
                {item.nombre} - {item.casa} - {item.estado}
              </div>
              <button>
                <a href={`/update/${item.id}`}>Edit</a>
              </button>
              <button onClick={() => handleDelete(item.id)}>X</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
