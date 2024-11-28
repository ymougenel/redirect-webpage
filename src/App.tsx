import React from 'react';
import './App.css';
import ProjectList from "./cards/ProjectList";

function App() {
    return (
        <div className="background">
            {/*<h1>You seem to be lost!</h1>*/}
            {/*<iframe title="gandalf_gif" src="https://giphy.com/embed/FPjbHO0jJxGsE" width="480" height="269"*/}
            {/*        className="giphy-embed" allowFullScreen></iframe>*/}
            <br />
            <br />
            <h1 className="question">Are you looking for any of those projects?</h1>
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
