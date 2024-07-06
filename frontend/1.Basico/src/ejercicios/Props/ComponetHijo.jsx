const ComponetHijo = ({ stacks }) => {
  return (
    <div>
      {stacks.map((e) => (
        <div key={e.Rol}>
          <p>Rol Partidas Win</p>
          <ul>
            <li>
              {e.Rol} {e.Partidas} {e.Porcentaje}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ComponetHijo;
