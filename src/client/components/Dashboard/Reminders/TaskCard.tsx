import React from 'react';

const TaskCard: React.FC<ITaskCardProps> = (props) => {

    return (
        <div className="task-card text-center box shadow">
        <div className="card-body dispay-flex justify-content-center">
            <h1>Today's Tasks</h1>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.task.content}</li>
            </ul>
        </div>
    </div>
    )
};

interface ITaskCardProps {
    task: {
        id: string,
        reminderid: string,
        content: string,
        relationid: number,
        childnum: number
    }
}

export default TaskCard;