import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "./redux/todoSlice";

const TaskList = () => {
    const tasks = useSelector((state) => state.todo.tasks);
    const dispatch = useDispatch();
  
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
