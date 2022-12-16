import React from 'react'

export default function Alert(props) {
    const cap = (word) => {
        if (word !== undefined) {
            console.log("Value count Check " + word);
            const element = word.toLowerCase();
            const output = element.charAt(0).toUpperCase() + element.slice(1);
            return output;
        } else {
            word = ' ';
        }
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{cap(props.alert.type)}</strong> {props.alert.message}
        </div>

    )
}