// @ts-nocheck
import React from 'react'
import { RouteComponentProps } from "react-router-dom"
import { IEvents } from '../../../Utils/types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import moment from "moment"
export default class newEvent extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppState) {
        super(props)
        this.state = {
            title: "",
            location: "",
            date: "",
            start: "",
            end: "",
            mandatorytask: false
        }
    }
    setMandatory = () => {
        this.setState({ mandatorytask: !this.state.mandatorytask })
    }

    submitEvent = (title: string, location: string, date: string, start: string, end: string, mandatorytask: boolean) => {

        console.log(start);
        console.log(end);
        fetch("/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: title, location: location, date: date, start: start, end: end, mandatorytask: mandatorytask })
        })
            .then(res => this.props.triggerRefresh())
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                <div className="create-event-container">
                    <h1 className="create-event-h1-text">Create New Event</h1>
                    <input id="title-input" placeholder="Event Title" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ title: e.target.value }) }} value={this.state.title} />
                    <input id="location-input" placeholder="Location" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ location: e.target.value }) }} value={this.state.location} />
                    <input id="username-input" placeholder="Date MM/DD/YYYY" className="form-control mx-2 my-2 px-2 py-2 col-8" type="date" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ date: e.target.value }) }} value={this.state.date} />
                    <input id="start-input" placeholder="Date MM/DD/YYYY" className="form-control mx-2 my-2 px-2 py-2 col-8" type="datetime-local" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ start: e.target.value }) }} value={this.state.start} />
                    <input id="end-input" placeholder="Date MM/DD/YYYY" className="form-control mx-2 my-2 px-2 py-2 col-8" type="datetime-local" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ end: e.target.value }) }} value={this.state.end} />
                    {/* checkbox */}
                    <div className="form-check my-1">
                    <p className="mand">Check box for mandatory event</p>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" onClick={() => this.setMandatory()} />
                            
                    </div>

                    {/* <input id="username-input" placeholder="Start-Time"className="form-control mx-2 my-2 px-2 py-2 col-8" type="time" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ start: e.target.value }) }} value={this.state.start} />
                <input id="username-input" placeholder="End-Time"className="form-control mx-2 my-2 px-2 py-2 col-8" type="time" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ end: e.target.value }) }} value={this.state.end} /> */}
                    {/* <input id="username-input" placeholder="Due Date"className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ duedate: e.target.value }) }} value={this.state.duedate} />
                <input id="username-input" placeholder="Mandatory?"className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ mandatorytask: e.target.value }) }} value={this.state.mandatorytask} /> */}
                    {/* <input id="username-input" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ completedtask: e.target.value }) }} value={this.state.completedtask}></input>
                <input id="username-input" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ relationid: e.target.value }) }} value={this.state.relationid}></input>
                <input id="username-input" className="form-control mx-2 my-2 px-2 py-2 col-8" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ childnum: e.target.value }) }} value={this.state.childnum}></input> */}
                    <button className="add-event-btn" type="submit" onClick={() => this.submitEvent(this.state.title, this.state.location, this.state.date, this.state.start, this.state.end, this.state.mandatorytask)}>
                        Submit Event!
                        </button>
                </div>
            </>
        )
    }
}
interface IAppProps extends RouteComponentProps<{ title: string }> {}

interface IAppState {
    title: string,
    location: string,
    date: string
    start: string,
    end: string,
  //  duedate: string,
    mandatorytask: boolean,
  //  completedtask: string,
    //relationid: string,
    //childnum: string,
}