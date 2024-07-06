import { useDispatch } from 'react-redux';
import { addTask } from './redux/todoSlice';
import { useState } from 'react';

const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
        dispatch(addTask(task));
        setTask('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button type="submit">Agregar</button>
      </form>
    );
  };
  
  export default AddTask;
