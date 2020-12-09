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

        
  <div className="task-card row justify-content-center align-items-center">
      {/* <h4 >Tommy's Tasks</h4> */}
      <img className="task-containter-logo" src="../assets/task-logo.png" alt=""/>
      <div className="task-list-container scroller">
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