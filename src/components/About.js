import React,{useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor:"White"
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const [btnStyle, setbtnStyle] = useState({
        color:'white',
        backgroundColor:'black'
    })

    const handleToggle = ()=>{
        if (myStyle.color === 'black'){
            setMyStyle({
                color:"white",
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
            setbtnStyle({
                color:'black',
                backgroundColor:'white'
            })
        }
        else
        {
            setMyStyle({
                color:'black',
                backgroundColor:"white"
            })
            setBtnText("Enable Dark Mode")
        }
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample"  >
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                    <strong> Hello, This is my first React App</strong>
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">   
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>Its just a simple Text Util App made with the help of Youtube Guide </strong> 
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>Credits to Code With Harry</strong> <br/>
                    This app was made by his youtube series linked here<br/>
                    <a href='https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt'>Link</a><br/>
                    It was a good video series
                    </div>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-dark my-3" style={btnStyle} onClick={handleToggle}>{btntext}</button>
    </div>
  )
}
