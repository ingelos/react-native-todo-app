import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const addTask = (name, priority) => {
        const newTask = {
            id: Date.now().toString(),
            name,
            priority,
            completed: false,
        };

        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(prevTasks => 
            prevTasks.map(task => 
                task.id === id 
                    ? {...task, completed: !task.completed} 
                    : task
            )
        )
    };

    const deleteTask = (id) => {
        setTasks(prevTasks => 
            prevTasks.filter(task => task.id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}