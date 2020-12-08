import React from 'react';
import { useState, useEffect } from 'react';
import TaskCard from './Reminders/TaskCard';


const TaskTimeline = () => {
    const [task, setTask] = useState<ITasks[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            let res = await fetch('/api/Tasks/');
            if (res.ok) {
                let tasks = await res.json();
                setTask(tasks);
            }
        }
        getTasks();
    }, []);

    return (

        
  <div className="card-body">
  <ul className="reminder-list-group list-group-flush">
  {task.map((task) => (<TaskCard task={task} key={task.id} />))}
  </ul>
  </div>
  
    )
}

interface ITasks {
    id: string,
    reminderid: string,
    content: string,
    relationid: number,
    childnum: number
}

export default TaskTimeline;