//API Fetch: Crea una aplicación que haga una solicitud a una API pública (por ejemplo, la API de datos de usuarios https://jsonplaceholder.typicode.com/users) y muestre los datos obtenidos.

import { useEffect, useState } from "react";

const ApiFetch = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo conectar");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((u) => (
          <li key={u.id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetch;
