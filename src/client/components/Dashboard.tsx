// @ts-nocheck
//for commit only
import React, { useState } from "react";
import RemindersCell from "../components/Dashboard/Reminders/RemindersCell";
// import Schedule from "./Dashboard/Events/Schedule";
import Messages from "../components/Dashboard/Messages";
import TaskList from "../components/Dashboard/TaskList";
import Profile from "../components/Auth0/Profile";
import CalendarApp from "./Calendar/CalendarApp";
import CreateEvent from "./Dashboard/Events/CreateEvent";

const Dashboard: React.FC<IDashboardProps> = props => {

  const [refresh, setRefresh] = useState<boolean>( false );

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div className="container">
      {/* <div className="row display-flex mx-1 my-5">
                <div className="col-4">
                    <LoginButton /><LogoutButton />
                </div>
            </div> */}
      
      <div className="row display-flex mx-1 my-5">
        <div className="col-4">
          <Profile />
        </div>
      </div>

      {/* <div className="row display-flex mx-1 my-5">
        <div className="col-6">
          <Messages />
          <Schedule />
        </div> */}


        <div className="row display-flex mx-1 my-5">
          <div className="col-6">
          <TaskList refresh={refresh}/>
          </div>
          <div className="col-6">
          <RemindersCell />
          </div>
        </div>

        <div className="row display-flex mx-1 my-5">
        <div className="col-12">
          <CreateEvent triggerRefresh={triggerRefresh}/>
        </div>
      </div>

        
        <div className="row display-flex mx-1 my-5">
        <div className="col-12">
          <CalendarApp refresh={refresh} history={props.history}/>
        </div>
      </div>

      {/* <div>
      <Messages />
      </div> */}


      </div>
    // </div>
  );
};

interface IDashboardProps {}

export default Dashboard;