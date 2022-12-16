import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        const value = text.toUpperCase();
        setText(value);
        if (value.length > 0) {
            props.showAlert("Text Convert to UpperCase", "success");
        }
        else {
            props.showAlert("Please enter text", 'warning')
        }

    }
    const handleLowClick = () => {
        const value = text.toLowerCase();
        setText(value);
        if (value.length > 0) {
            props.showAlert("Text Convert to LowerCase", "success");
        }
        else {
            props.showAlert("Please enter text", 'warning')
        }
    }
    const handleCapClick = () => {
        let value = () => {
            let finalStrArr = [];
            let strArr = text.split(" ");
            strArr.forEach(element => {
                finalStrArr.push(element.charAt(0).toUpperCase() + element.slice(1));
            });
            let finalStr = finalStrArr.join(" ");
            return finalStr;
        }
        setText(value);
        if (text.length > 0) {
            props.showAlert("Text Convert to LowerCase", "success");
        } else {
            props.showAlert("Please enter text", 'warning');
        }

    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        if (text.length > 0) {
            props.showAlert("Copied to Clipboard", "success");
        }
        else {
            props.showAlert("There is no Text to copy", 'warning')
        }
    }
    const handleClearClick = () => {
        const value = '';
        setText(value);
        if (value.length > 0) {
            props.showAlert("Text Area is Cleared", "success");
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className={`container p-3 text-${props.mode === 'light' ? 'black' : 'light'} `}>
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea className={`form-control text-${props.mode === 'light' ? 'black' : 'light'} `} id="myBox" value={text} placeholder={'Enter your text here'} onChange={handleOnChange} cols="30" rows="10"></textarea>
                </div>
                <div className='d-flex flex-md-row flex-column  justify-content-center'>
                    <button className='btn btn-primary m-2' onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className='btn btn-primary m-2' onClick={handleLowClick}>Convert to LowerCase</button>
                    <button className='btn btn-primary m-2' onClick={handleCapClick}>Convert to Capitalize Word</button>
                    <button className='btn btn-primary m-2' onClick={handleCopyClick}>Copy Text</button>
                    <button className='btn btn-primary m-2' onClick={handleClearClick}>Clear Text</button>

                </div>
            </div>
            <div className={`container my-3 text-${props.mode === 'light' ? 'black' : 'light'} `}>
                <h1>Text Summary</h1>
                <p>{(text.split(/[" "]+/)).length - 1}: Words and {text.length}: Character</p>
                <p>{0.008 * (text.split(/[" "]+/)).length} Average Reading time</p>
                <h3>Preview</h3>
                <p className={`form-control text-${props.mode === 'light' ? 'black' : 'light'} `} id="myBox" value={text} >{text.length > 0 ? text : "Please enter your text to preview"}</p>
            </div>
        </>
    )
}
