import React from "react";

function Avatar(props){
    return(
        <img src={props.user.avatarUrl} alt={props.user.name}></img>
    );
}

export default Avatar;