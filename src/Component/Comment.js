import React from "react";
import Avatar from './Avatar'

function formatDate(date){
    return date.toLocaleDateString();
}

function Comment(props){
    return(
        <div>
            {/* <div>
                <Avatar user ={props.author}></Avatar>
                <div>{props.author.name}</div>
            </div>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div> */}
            <div>
                <img src={props.author.avatarUrl} alt={props.author.name}></img>
                <div>{props.author.name}</div>
            </div>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div>
        </div>
    );
}

export default Comment;