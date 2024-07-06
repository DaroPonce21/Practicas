import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "./redux/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({
    usuario: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((ele) => ({ ...ele, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
    setUser({
      usuario: "",
      password: "",
    });
  };

  return (
    <>
      <div>
        <h2>Inicia secion</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuario: </label>
          <input
            type="text"
            placeholder="ingresar usuario"
            name="usuario"
            value={user.usuario}
            id="user"
            autoComplete="off"
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            placeholder="ingresar contraseña"
            name="password"
            id="password"
            autoComplete="off"
            value={user.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <div>
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
      <div>
        <p>
          Si no tienes un usuario puedes crearlo haciendo{" "}
          <Link to="/registro">click aca</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
