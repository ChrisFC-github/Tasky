import React from 'react';
import { useState, useEffect } from 'react';
import TaskCard from './Reminders/TaskCard'
const TaskList = () => {
    const [events, setEvents] = useState<IEvents[]>([]);
    useEffect(() => {
        const getEvents = async () => {
            let res = await fetch('/api/events/mandatory');
            if (res.ok) {
                let events = await res.json();
                setEvents(events);
            }
        }
        getEvents();
    }, []);
    return (
  <div className="task-card-body mx-5">
  <ol className="task-list-group d-flex justify-content-left list-group-flush">
  {events.map((events) => (<TaskCard events={events} key={events.id} />))}
  </ol>
  </div>
    )
}
interface IEvents {
    id: string,
    title: string,
    location: string,
    date: string
    start: string,
    end: string,
  //  duedate: string,
    mandatorytask: boolean,
  //  completedtask: string,
    //relationid: string,
    //childnum: string
}
export default TaskList;