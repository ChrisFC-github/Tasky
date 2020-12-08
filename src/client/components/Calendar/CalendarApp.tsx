import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import CreateEvent from '../Dashboard/Events/CreateEvent'

const localizer = momentLocalizer(moment);
// const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component<IAppProps> {
    constructor(props: IAppProps) {
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
        };
    }

    componentDidMount() {
        this.fetchEvents()
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
                        defaultView={'month'}
                        views={["month", "week", "day", "agenda"]}
                        events={this.state.events}
                        localizer={localizer}
                        style={{ height: "100vh" }}
                        onSelectEvent={}
                    />
                </div>
            </>

        );
    }
}

interface IAppProps { }
interface IAppState {
    events: Array<object>
}

export default App;