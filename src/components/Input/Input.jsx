import React from 'react';
import './Input.scss';

export const Input = (props) => {
    return (
        <input type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            className={`input ${props.className}`}
            onChange={props.onChange ? (e)=> props.onChange(e) : null}

        />
    )
}
