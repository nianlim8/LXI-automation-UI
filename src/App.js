import React from "react"
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"

// import logo from './logo.svg';
// import './App.css';
import Header from "./Pages/header.jsx";
import Test from "./Pages/test.jsx";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App(){
  return(
    <div className="app">
        <Router>
          <Header></Header>
          <br/><br/>
          <Routes>
            <Route path="/test" element={<Test/>}/>
          </Routes>
        </Router>
    </div>
  )
}
export default App

