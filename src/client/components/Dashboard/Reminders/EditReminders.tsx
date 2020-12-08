import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';

const EditReminder: React.FC<IEditProps> = (props: IEditProps) => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        (async () => {
            let res = fetch(`/api/reminders/${props.match.params.id}`);
            let reminder = await (await res).json();
            setContent(reminder.content);
        })()
    }, []);

    const handleContentChange = (e) => setContent(e.target.value);

    const editReminder = async (id: string) => {
        const reminder = {
            id: id,
            content: content
        };
        let res = await fetch(`/api/reminders/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reminder)
        })
        if (res.ok) {
            console.log('reminder edited');
            props.history.push('/dashboard');
        } else {
            console.log('reminder edit failed');
        }
    };

    const deleteReminder = async (id: string) => {
        let res = await fetch(`/api/reminders/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            console.log('reminder deleted');
            props.history.push('/dashboard');
        } else {
            console.log('reminder not deleted');
        }
    };

    return (
        <div className="editReminderContainer">
            <h1>Edit Reminder</h1>
            <textarea rows={3} cols={50}  className="reminder-edit-text-area card-text" defaultValue={content} onChange={(e) => handleContentChange(e)}></textarea>
                <button className="second-edit-reminder-btn" onClick={() => editReminder(props.match.params.id)}>Save Edit</button>
                <button className="main-delete-reminder-btn" onClick={() => deleteReminder(props.match.params.id)}>Delete Reminder</button>
        </div>
    )
}

interface IEditProps extends RouteComponentProps<{id: string}> { }
export default EditReminder;


// const EditReminder = (props: IDeleteProps) => {
// const { id } = useParams();
 
//     const deleteReminder = async (id: string) => {
//         let res = await fetch(`/api/reminders/${id}`, {
//             method: "DELETE"
//         });
//         if (res.ok) {
//             console.log('reminder deleted');
//             props.history.push('/');
//         } else {
//             console.log('delete not successful');
//         }
//     };

//     return (
//         <button
            
//             type="button"
//             className="btn btn-default"
//             aria-label="Right Align"

//             onClick={() => deleteReminder(id)}
//         >Edit</button>
//     )
// }

// interface IDeleteProps extends RouteComponentProps<{ id: string }> { }
// export default EditReminder;