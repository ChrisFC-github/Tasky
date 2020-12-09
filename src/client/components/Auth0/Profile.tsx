// @ts-nocheck
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div className="profile-container">
        <img className="profile-img" src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <h5>{user.email}</h5>
        {/* <p>{user.sub}</p> */}
        {/* <JSONPretty data={user} /> */}
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  )
}

export default Profile;