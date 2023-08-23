import React, { Component } from 'react'
function Button(props){
    
    
        const {className,text,event,disabled} = props;
        return (
            <button
            onClick={event}
            className={className}
            disabled={disabled}
            >
            {text}

            </button>
         
        
        );
    }
 
export default Button;