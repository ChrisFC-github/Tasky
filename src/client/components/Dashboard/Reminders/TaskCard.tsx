import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';
import EditReminder from './EditReminders';
const TaskCard: React.FC<IEvents> = (props) => {
    return (
        <div className="reminder-list-container">
            <ol className="list-group list-group-flush">
            <h5 className="reminder-list-group-item">{props.events.title}</h5>
            </ol>
        </div>
    )
};
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
   events: string,
}
export default TaskCard;