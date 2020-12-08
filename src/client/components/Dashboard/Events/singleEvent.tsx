// for clean commit only
import React from 'react'
// import { IEvents } from "../../utils/types"
import { RouteComponentProps } from "react-router-dom"
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom"
import { timeLog } from 'console'


export default class singleEvent extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppState) {
        super(props)
        this.state = {
            id: "",
            title: "",
            location: "",
            time: "",
            duedate: "",
            mandatorytask: "",
            completedtask: "",
            relationid: "",
            childnum: ""
        }
    }
    componentDidMount() {
        this.makeEvent()
    }
    makeEvent = () => {
        fetch(`api/events/`)
            .then(data => data.json())
            .then(data => this.setState({ id: data }))
            .catch(err => console.log(err))
    }
    deleteEvent = () => {
        try {
            this.makeEvent()
            fetch(`api/events/:id`, { method: "DELETE" })
            .then(res => this.props.history.push("/"))
        } catch (err) {
            console.log(err)
        }
    }
    saveEvent = async (title: string, location: string, duedate: string, time: string, childnum: string, mandatorytask: string, completedtask: string, relationid: string) => {
        try {
            // ${id} would be given from a javascript pulling out the last id created under the relationid of the user
            let res = await fetch(`api/events/:id`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: title, location: location, time: time, duedate: duedate, mandatorytask: mandatorytask, completedtask: completedtask, relationid: relationid, childnum: childnum })
            })
        } catch (err) {
            console.log(err)
        }
    }
    //working on editing a single event next
    render() {
        return (
            <div>
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ title: e.target.value }) }} value={this.state.title} />
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ location: e.target.value }) }} value={this.state.location} />
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ time: e.target.value }) }} value={this.state.time} />
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ duedate: e.target.value }) }} value={this.state.duedate} />
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ mandatorytask: e.target.value }) }} value={this.state.mandatorytask} />
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ completedtask: e.target.value }) }} value={this.state.completedtask} />
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ relationid: e.target.value }) }} value={this.state.relationid} />
                <input id="username-input" className="form-control my-2" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.setState({ childnum: e.target.value }) }} value={this.state.childnum} />
                <button className="btn btn-primary" type="submit" onClick={() => this.saveEvent(this.state.title, this.state.location, this.state.time, this.state.duedate, this.state.mandatorytask, this.state.completedtask, this.state.relationid, this.state.childnum)}>
                    Submit Event!
                </button>
            </div>
        )
    }
}
interface IAppProps extends RouteComponentProps<{ title: string }> {
}
interface IAppState {
    id: any,
    title: string,
    location: string,
    time: string,
    duedate: string,
    mandatorytask: any,
    completedtask: any,
    relationid: any,
    childnum: any
}