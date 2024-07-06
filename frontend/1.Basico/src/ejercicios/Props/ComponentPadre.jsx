import ComponetHijo from "./ComponetHijo";

const ComponentPadre = () => {
  const stacks = [
    { Rol: "Top", Partidas: 10, Porcentaje: "25%" },
    { Rol: "Jg", Partidas: 8, Porcentaje: "50%" },
    { Rol: "Mid", Partidas: 12, Porcentaje: "15%" },
    { Rol: "ADC", Partidas: 4, Porcentaje: "25%" },
    { Rol: "Sup", Partidas: 30, Porcentaje: "80%" },
  ];
  return (
    <div>
      <h1>Estadisticas del Lolcito</h1>
      <ComponetHijo stacks={stacks} />
    </div>
  );
};

export default ComponentPadre;
