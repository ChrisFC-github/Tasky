import React from 'react';
import { useState, useEffect } from 'react';
import TaskCard from './Reminders/TaskCard';
const TaskTimeline = () => {
    const [task, setTask] = useState<ITasks[]>([]);
    useEffect(() => {
        const getTasks = async () => {
            let res = await fetch('/api/events');
            if (res.ok) {
                let tasks = await res.json();
                setTask(tasks);
            }
        }
        getTasks();
    }, []);
    return (
        <div className="task-card">
            <h1>Task List</h1>
            <ol className="reminder-list-group list-group-flush">
                {task.map((events) => (<TaskCard task={events} key={events.id} />))}
            </ol>
            <div>
                <ul>
                    {Event.title}
                </ul>

            </div>
            {/* {events.start, events.end} */}
        </div>
    )
}
interface ITasks {
    id: string,
    reminderid: string,
    content: string,
    relationid: number,
    childnum: number,
    events: string,
    title: string
}
export default TaskTimeline;