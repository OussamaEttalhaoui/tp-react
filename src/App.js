import React, { useState } from 'react';
import GuestBookApp from "./GuestBookApp";
import Profile from "./Profile";
import TaskList from "./TaskList";
function App() {
const [tasks, setTasks] = useState([
{ id: 1, text: 'Faire les courses', completed: false },
{ id: 2, text: 'Apprendre React', completed: true },
{ id: 3, text: 'Faire de l\'exercice', completed: false },
]);

const handleToggleCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

return (
<div>
 <Profile/> 
<h1>Liste des Tâches</h1>
<TaskList tasks={tasks} onToggleCompleted={handleToggleCompleted} />
<GuestBookApp/>
</div>
);
};
export default App;