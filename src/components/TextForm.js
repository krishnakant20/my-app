import React, { useState } from 'react'



export default function Textform(props) {
    const handleUpClick = () => {
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("uppercase has been enabled","success");

    }
    const handleLoClick = () => {
        //console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("lowercase has been enabled","success");
    }

    const handleOnChange = (event) => {
       // console.log("on change")
        setText(event.target.value);
    }

    const [text, setText] = useState(" ");

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="myBox" rows="5" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                <button className="btn btn-primary my-3 mx-3" onClick={handleUpClick} >convert to uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick} >convert to lowercase</button>
            </div>
        </div>
        <div className="container mu-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Summary text is</h1>
            <p>{text.split(" ").length} words &&& {text.length} characters</p>
            <p>{0.008*text.split(" ").length} words time </p>
            <h2>previewsss</h2>
            <p>{text.length>0?text:'enter preview'}</p>
        </div>
        </>
    )
}
