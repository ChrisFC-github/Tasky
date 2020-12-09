// @ts-nocheck
import React from 'react'
import { IEvents } from "../../../Utils/types";
import singleEvent from "./singleEvent"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
export default class Home extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props)
        this.state = {
            events: [],
        }
    }
    componentDidMount() {
        this.fetchEvents()
    }
    fetchEvents = () => {
        fetch("api/events/")
            .then(data => data.json())
            .then(data => this.setState({ events: data }))
            .catch(err => console.log(err));
    }
    deleteEvent = async id => {
        try {
            let res = await fetch(`api/events/${id}`, { method: "DELETE" })
            this.fetchEvents()
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    // const eventDelete = () => {
    // }
    render() {
        return this.state.events.map((events: IEvents) => (
            <Router>
                <div key={events.id} className="box shadow">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{events.title}</h5>
                                    <h5 className="card-title">{events.location}</h5>
                                    <h5 className="card-title">{events.time}</h5>
                                    <h5 className="card-title">{events.duedate}</h5>
                                    <button key={events.id} className="send-message-btn" onClick={() => this.deleteEvent(events.id)}>Delete</button>
                                </div>
                            </div>
                </div>
                {/* <Link to="/events:id/admin">
                    <button>Edit Event!</button>
                </Link>
                <Switch>
                    <Route exact path="/events:id/admin" component={singleEvent}></Route>
                </Switch> */}
            </Router>
            //     <div key={events.id} className="card text-white bg-dark mb-3">
            //     <div className="card text-white bg-dark mb-3">
            //      <div className="card-header text">{events.title}</div>
            //     <div className="card-header text">{events.location}</div>
            //     <div className="card-header text">{events.time}</div>
            //     <div className="card-header text">{events.duedate}</div>
            //     <div className="card-body">
            //         <button className="btn btn-dark btn-sm" onClick={()=> this.deleteEvent(events.id)}>Delete</button>
            //     </div>
            // </div>
            // </div>
        ))
    }
}
interface IAppProps {
}
interface IAppState {
    events: Array<object>
}