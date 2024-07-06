//Autenticación Básica: Implementa un sistema de autenticación simple (login/logout) utilizando un servicio de autenticación falso o un backend mock.

import { useSelector } from "react-redux";
import Logout from "./Logout";
import Login from "./Login";

const Autenticacion = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <h1>Bienvenido</h1>
      {isAuthenticated ? <Logout /> : <Login />}
      <div></div>
    </div>
  );
};

export default Autenticacion;
