import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';

const EditEvent: React.FC<IEditProps> = (props: IEditProps) => {
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [start, setStart] = useState<string>("");
    const [end, setEnd] = useState<string>("");


    useEffect(() => {
        (async () => {
            let res = fetch(`/api/events/${props.match.params.id}`);
            let events = await (await res).json();
            setTitle(events.title);
            setDate(events.date);
            setLocation(events.location);
            setStart(events.start);
            setEnd(events.end);
        })()
    }, []);

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDateChange = (e) => setDate(e.target.value);
    const handleLocationChange = (e) => setLocation(e.target.value);
    const handleStartChange = (e) => setStart(e.target.value);
    const handleEndChange = (e) => setEnd(e.target.value);
    

    const editEvent = async (id: string) => {
        const events = {
            id: id,
            title: title,
            date: date,
            location: location,
            start: start,
            end: end
        };
        let res = await fetch(`/api/events/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(events)
        })
        if (res.ok) {
            console.log('event edited');
            props.history.push('/dashboard');
        } else {
            console.log('event edit failed');
        }
    };

    const deleteEvent = async (id: string) => {
        let res = await fetch(`/api/events/${id}`, {
            method: "DELETE"
        });
        if (res.ok) {
            console.log('event deleted');
            props.history.push('/dashboard');
        } else {
            console.log('event not deleted');
        }
    };

    return (
        <div className="editEventContainer">
            <h1>Edit Event</h1>
            {/* <textarea rows={3} cols={50}  className="reminder-edit-text-area card-text" defaultValue={title} onChange={(e) => handleTitleChange(e)}></textarea> */}
            <input id="title-input" defaultValue={title} className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e) => handleTitleChange(e)}></input> 
                    <input id="location-input" defaultValue={location} className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e) => handleLocationChange(e)} />
                    <input id="username-input" defaultValue={date} className="form-control mx-2 my-2 px-2 py-2 col-8" type="date" onChange={(e) => handleDateChange(e)} />
                    <input id="start-input" defaultValue={start} className="form-control mx-2 my-2 px-2 py-2 col-8" type="datetime-local" onChange={(e) => handleStartChange(e)} />
                    <input id="end-input" defaultValue={end} className="form-control mx-2 my-2 px-2 py-2 col-8" type="datetime-local" onChange={(e) => handleEndChange(e)}/>
                <button className="second-edit-event-btn" onClick={() => editEvent(props.match.params.id)}>Save Edit</button>
                <button className="main-delete-event-btn" onClick={() => deleteEvent(props.match.params.id)}>Delete Event</button>
        </div>
    )
}

interface IEditProps extends RouteComponentProps<{id: string}> { }
export default EditEvent;