import React from 'react';
import { useState, useEffect } from 'react';
import TaskCard from './Reminders/TaskCard';


const TaskTimeline = () => {
    const [task, setTask] = useState<ITasks[]>([]);

    useEffect(() => {
        const getTasks = async () => {
            let res = await fetch('/api/events/mandatory');
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
  {task.map((events) => (<TaskCard task={events} key={events.id} />))}
  </ul>
  {/* {events.title} */}
  {events.start, events.end}
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