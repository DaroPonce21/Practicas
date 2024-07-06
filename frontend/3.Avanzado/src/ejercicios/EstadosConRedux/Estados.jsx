/*Ejercicio: Gestión de Tareas (To-Do List) con Redux
Objetivo: Crear una aplicación de gestión de tareas donde los usuarios puedan agregar, editar, marcar como completadas y eliminar tareas. Usa Redux para manejar el estado de la aplicación.

Requisitos:
Agregar Tarea: Permitir a los usuarios agregar nuevas tareas.
Editar Tarea: Permitir a los usuarios editar las tareas existentes.
Completar Tarea: Permitir a los usuarios marcar las tareas como completadas.
Eliminar Tarea: Permitir a los usuarios eliminar tareas.
Pasos para Implementar:
Configurar Redux:

Crear un slice para manejar el estado de las tareas.
Configurar el store de Redux.
Componentes de la Aplicación:

Crear componentes para agregar, listar, editar y gestionar tareas.
Conectar Redux a los Componentes:

Usar useSelector y useDispatch para conectar los componentes con el estado de Redux y las acciones.*/

import AddTask from "./AddTask";
import TaskList from "./TaskList";

const Estados = () => {
  return (
    <>
      <AddTask />
      <TaskList />
    </>
  );
};

export default Estados;
