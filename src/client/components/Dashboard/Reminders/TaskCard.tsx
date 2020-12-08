import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';
import EditReminder from './EditReminders';

const TaskCard: React.FC<IEvents> = (props) => {



    return (
        
            <li className="task-list-group-item"> 
            {props.events.title}
            </li>
      
    )
};

interface IEvents {
    id: string,
    title: string,
    location: string,
    date: string,
    start: string,
    end: string,
  //  duedate: string,
    mandatorytask: boolean,
  //  completedtask: string,
    //relationid: string,
    //childnum: string
}

export default TaskCard;