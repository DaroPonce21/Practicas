import "./App.css";
import BottonState from "./ejercicios/BottonState";
import ComponentPadre from "./ejercicios/ComponentPadre";
import ComponentSimple from "./ejercicios/ComponentSimple";
import Holamundo from "./ejercicios/Holamundo";

function App() {
  return (
    <div>
      <Holamundo />
      <ComponentSimple />
      <BottonState />
      <ComponentPadre/>
    </div>
  );
}

export default App;
