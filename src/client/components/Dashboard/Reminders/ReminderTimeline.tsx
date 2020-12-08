import React from 'react';
import { useState, useEffect } from 'react';
import ReminderCard from './ReminderCard';


const ReminderTimeline = () => {
    const [reminder, setReminder] = useState<IReminders[]>([]);

    useEffect(() => {
        const getReminders = async () => {
            let res = await fetch('/api/reminders');
            if (res.ok) {
                let reminders = await res.json();
                setReminder(reminders);
            }
        }
        getReminders();
    }, []);

    return (

        
  <div className="reminder-card-body mx-5">
  <ol className="reminder-list-group d-flex justify-content-left list-group-flush">
  {reminder.map((reminder) => (<ReminderCard reminder={reminder} key={reminder.id} />))}
  </ol>
  </div>
  
    )
}

interface IReminders {
    id: string,
    reminderid: string,
    content: string,
    relationid: number,
    childnum: number
}

export default ReminderTimeline;