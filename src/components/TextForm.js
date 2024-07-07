import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState(""); // array destructuring
    // text = "Newe" // wrong way to change text
    // setText("Mew text"); // Correct way to change text

    const handleOnChange = (event)=>{
        // console.log("Handle on change was done")
        setText(event.target.value)
    }

    const handleUpClick = ()=>{
        // console.log("Upper case was clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Upper case set","success")
    }

    const handleDownClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Lower case set","success")
    }

    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text Spoken","success")

      }

    const handleClearClick = ()=>{
        let newText = ""
        setText(newText)
        props.showAlert("Text cleared","success")
    }

    // const handleCapClick = ()=>{
    //     let splitArray =text.split(" ");
    //     let newText = ""
    //     for(let i = 0;i<splitArray.length;i++){
    //         newText=newText+' '+splitArray[i][0].toUpperCase()+splitArray[i].slice(1)
    //     }
    //     setText(newText)
    // }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard","success")

    }

    const textColor = (m)=>{
        if(m === 'light' || m === 'redLight')
          return 'black'
        else if(m === 'dark' || m === 'redDark')
          return 'white'
      }
    
      const bkgClr = (m)=>{
        if(m === 'light')
            return 'white'
        else if(m === 'dark')
            return '#41484f'
        else if(m === 'redDark')
            return '#990312'
        else if(m === 'redLight')
            return '#db4a58'
      }
    return (
        <>
        <div className='container' style={{color: textColor(props.mode)}}>
        <h1 > {props.heading} </h1> 
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor: bkgClr(props.mode),color : textColor(props.mode)}} value={text} placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}> Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={handleSpeakClick}> Speak</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleCapClick}> One word only first character</button> */}
        <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy to clipboard</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> Clear</button>

    </div>

    <div className="container my-4" style={{color: textColor(props.mode)}}>
        <h1> Text Summary</h1>
        <p> {text.split(" ").length} words and {text.length} character are typed  </p>
        <p> If your reading time is 125 words per minute, it will take you {text.split(" ").length * 0.008 * 60} seconds</p>
        <h2>Preview</h2>
        <p> {text.length>0?text:"Enter text to preview"} </p>
    </div>
    </>
  )
}
