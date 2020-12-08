import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import CalendarApp from "../Calendar/CalendarApp";

const CalendarButton = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Link to="/calendar">
        <button className="btn btn-outline-light text-white mx-2">
          Calendar
        </button>
      </Link>
    )
  );
};

export default CalendarButton;
