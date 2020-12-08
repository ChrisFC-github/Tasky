import React from 'react';
import { useState, useEffect } from 'react';
import TaskCard from './Reminders/TaskCard'
import '../../scss/app.scss'


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

        
  <div className="task-list justify-content-center text-center mx-5">
      <h2>Tommy's Tasks For Today</h2>
  <div className="d-flex justify-content-left list-group-flush bulletPoints">
  {events.map((events) => (<TaskCard events={events} key={events.id} />))}
  </div>
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