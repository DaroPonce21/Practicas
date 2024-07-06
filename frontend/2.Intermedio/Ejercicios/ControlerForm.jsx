//Crea un formulario con campos de entrada (nombre, email) y muestra los datos ingresados en tiempo real debajo del formulario.

import { useState } from "react";

const ControlerForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`se envia a backend los siguientes datos:`, user);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      <br />
      <div>
        <label>Username: {user.username}</label>
        <br />
        <br />
        <label>Email: {user.email}</label>
        <br />
        <br />
        <label>Password: {user.password}</label>
      </div>
    </div>
  );
};

export default ControlerForm;
