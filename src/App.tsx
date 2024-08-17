import React from 'react';
import './App.css';
import ProjectList from "./cards/ProjectList";

function App() {
    return (
        <div className="App">
            <h1>You seem to be lost!</h1>
            <p>/learn react/i</p>
            <iframe title="gandalf_gif" src="https://giphy.com/embed/FPjbHO0jJxGsE" width="480" height="269"
                    className="giphy-embed" allowFullScreen></iframe>
            <p></p>
            <h1>Are you looking for any of those?</h1>
            <br/>
            <ProjectList/>
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
        </div>
    );
}

export default App;
