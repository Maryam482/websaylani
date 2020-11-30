import React from 'react';

// function Hi(props){
function Hi({name, msg}) {
    // const {name, msg} = props;
    return <div>{name} {msg}</div>
 }
//or
// const Hi = ({name, msg}) => <div>{name} {msg}</div>
const Bye = ({msg1}) => <div>{msg1}</div>
export {
    Hi,
    Bye
}