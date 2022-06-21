import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

function Profile({match}){
    if(match.params.isLogin == 1){
        return(
            <div>
                <h2>welcome: {match.params.name}</h2>;
            </div>
        );
    }
    else return <Redirect to="/Home"></Redirect>;
}

export default Profile;