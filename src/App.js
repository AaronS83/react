// import './App.css';
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// // import About from './components/About';

// function App() {
//   const [mode, setMode] = useState('light') // whether darkmode is dark or not
//   const [alert, setAlert] = useState(null)

//   const showAlert = (message, type)=>{
//     setAlert({
//       msg:message,
//       type:type
//     })

//     setTimeout(() => {
//       setAlert(null)
//     }, 1500);
//   }

//   const toggleMode=()=>{
//     if (mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor='#41484f'
//       showAlert("Dark mode enabled", "success")
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor='white'
//       showAlert("Light mode enabled", "success")
//     }
//   }
//   return (
//     <>
//       <Navbar title = "Text Util" mode={mode} toggleMode={toggleMode}/>
//       <Alert alert={alert}/>
//       <div className="container my-3">{/*  container is a bootstrap class */}
//       <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
//       {/* <About/> */}
//       </div>
//     </>
//   );
// }

// export default App;
//_____________________________________________________________________________________________________________________________________________________________________

// import './App.css';
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import About from './components/About';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Routes,
//   Router
// } from "react-router-dom";

// function App() {
//   const [mode, setMode] = useState('light') // whether darkmode is dark or not
//   const [alert, setAlert] = useState(null)

//   const showAlert = (message, type)=>{
//     setAlert({
//       msg:message,
//       type:type
//     })

//     setTimeout(() => {
//       setAlert(null)
//     }, 1500);
//   }

//   const toggleMode=()=>{
//     if (mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor='#41484f'
//       showAlert("Dark mode enabled", "success")
//       // document.title = 'TextUtils - Dark Mode'
//     }
//     else if(mode === 'dark'){
//       setMode('light');
//       document.body.style.backgroundColor='white'
//       showAlert("Light mode enabled", "success")
//       // document.title = 'TextUtils - Light Mode'

//     }
//     else if(mode === 'redDark'){
//       setMode('redLight');
//       document.body.style.backgroundColor='#db4a58'
//       showAlert("Red Light mode enabled", "success")
//       // document.title = 'TextUtils - Red Light Mode'

//     }
//     else if(mode === 'redLight'){
//       setMode('redDark');
//       document.body.style.backgroundColor='#990312'
//       showAlert("Red Dark mode enabled", "success")
//       // document.title = 'TextUtils - Red Dark Mode'

//     }
//   }

//   const toggleRedBtn = ()=>{
//     if (mode === 'light'){
//       setMode('redLight');
//       document.body.style.backgroundColor='#db4a58'
//       showAlert("Red Light mode enabled", "success")
//     }
//     else if(mode === 'dark'){
//       setMode('redDark');
//       document.body.style.backgroundColor='#990312'
//       showAlert("Red Dark mode enabled", "success")
//     }
//     else if(mode === 'redDark'){
//       setMode('dark');
//       document.body.style.backgroundColor='#41484f'
//       showAlert("Dark mode enabled", "success")
//     }
//     else if(mode === 'redLight'){
//       setMode('light');
//       document.body.style.backgroundColor='white'
//       showAlert("Light mode enabled", "success")
//     }
//   }
//   return (
//     <>
//     {/* <Router> */}
//       <Navbar title = "Text Util" mode={mode} toggleMode={toggleMode} toggleRedBtn={toggleRedBtn}/>
//       <Alert alert={alert}/>
//       <div className="container my-3">{/*  container is a bootstrap class */}
//       {/* <Routes>
//         <Route path='./about'> */}
//           {/* <About/> */}
//         {/* </Route>
//         <Route path='/'> */}
//           <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
//         {/* </Route>
//       </Routes> */}
//       {/* <About/> */}
//       </div>
//       {/* </Router>    */}
//     </>
//   );
// }

// export default App;
// _____________________________________________________________________________________________________________________

import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // whether darkmode is dark or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#41484f'
      showAlert("Dark mode enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
    }
    else if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled", "success")
      // document.title = 'TextUtils - Light Mode'

    }
    else if(mode === 'redDark'){
      setMode('redLight');
      document.body.style.backgroundColor='#db4a58'
      showAlert("Red Light mode enabled", "success")
      // document.title = 'TextUtils - Red Light Mode'

    }
    else if(mode === 'redLight'){
      setMode('redDark');
      document.body.style.backgroundColor='#990312'
      showAlert("Red Dark mode enabled", "success")
      // document.title = 'TextUtils - Red Dark Mode'

    }
  }

  const toggleRedBtn = ()=>{
    if (mode === 'light'){
      setMode('redLight');
      document.body.style.backgroundColor='#db4a58'
      showAlert("Red Light mode enabled", "success")
    }
    else if(mode === 'dark'){
      setMode('redDark');
      document.body.style.backgroundColor='#990312'
      showAlert("Red Dark mode enabled", "success")
    }
    else if(mode === 'redDark'){
      setMode('dark');
      document.body.style.backgroundColor='#41484f'
      showAlert("Dark mode enabled", "success")
    }
    else if(mode === 'redLight'){
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title = "Text Util" mode={mode} toggleMode={toggleMode} toggleRedBtn={toggleRedBtn}/>
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route 
          exact path="/about" 
          element={<About />}>
        </Route>
        <Route
            exact path="/"
            element={
              <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
            }>
        </Route>
        </Routes>
      </div>
    </BrowserRouter>
  </>
  );
}

export default App;