import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';
import EditReminder from './EditReminders';

const ReminderCard: React.FC<IReminderCardProps> = (props) => {



    return (
        <div className="reminder-list-container">
            <ol className="list-group list-group-flush"> 
            <h5 className="reminder-list-group-item justify-content-left">{props.reminder.content}</h5>
            <Link to={`/${props.reminder.id}/edit`} >
                <button
                    type="button"
                    className="edit-reminder-btn btn btn-light"
                    aria-label="Right Align"
                >Edit</button>
            </Link>
            </ol>
        </div>
    )
};

interface IReminderCardProps {
    reminder: {
        id: string,
        reminderid: string,
        content: string,
        relationid: number,
        childnum: number
    }
}

export default ReminderCard;