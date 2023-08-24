import React, { Component } from 'react'
function Button(props){
    const { text, event, className, disabled } = props;
     return (
            <button
            className="btn btn-outline-success"
            type="submit"
            text="Search"
            onClick={event}
            >
            Search

            </button>
         
        
        );
    }
 
export default Button;