import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import CreateEvent from '../Dashboard/Events/CreateEvent'
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const localizer = momentLocalizer(moment);


class CalendarApp extends Component<ICalendarAppProps> {
    constructor(props: ICalendarAppProps) {
        super(props);
        this.state = {
            events: [
                {
                    title: "",
                    date: "",
                    location: "",
                    start: moment().toDate(),
                    end: moment().add(1, "days").toDate(),
                    duedate: ""
                },
            ],
            refresh: false
        };
    }

    handleEventSelect = () =>{
    }

    refreshCalendar = () => {
        this.setState({ refresh: !this.state.refresh });
    }

    componentDidMount() {
        this.fetchEvents()
        console.log(this.props)
    }

    componentDidUpdate(prevProps) {
        if (this.props.refresh !== prevProps.refresh) {
            this.fetchEvents();
        }
        console.log('test');
    }
    fetchEvents = () => {
        fetch('/api/events')
            .then(data => data.json())
            .then(data => this.setState({ events: data }))
            .catch(err => console.error(err))
    }
  

    // onEventResize = (data) => {
    //     const { start, end } = data;

    //     this.setState((state) => {
    //     state.events[0].start = start;
    //     state.events[0].end = end;
    //     return { events: [...state.events] };
    // });
    // };

    // onEventDrop = (data) => {
    //     console.log(data);
    // };

    render() {
        return (
            <>
                <div className="CalendarContainer my-2 mx-2 py-2 px-2">
                    <Calendar
                        defaultDate={moment().toDate()}
                        defaultView="month"
                        views={["month", "week", "day", "agenda"]}
                        events={this.state.events}
                        localizer={localizer}
                        style={{ height: "100vh" }}
                       onSelectEvent={(e)=>{this.props.history.push(`/events/${e.id}/editevent`)}}
                        // onSelectEvent={props.history.push(`/events/${this.props.match.params.id}/editevent`)}
                    />
                </div>
            </>

        );
    }
}

interface ICalendarAppProps extends RouteComponentProps<{id: string}> { }
interface ICalendarAppState {
    events: Array<object>
}

export default CalendarApp;

