import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Estados from "./ejercicios/EstadosConRedux/Estados";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Estados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
