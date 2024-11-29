import React from 'react';
import './App.css';
import ProjectList from "./cards/ProjectList";

function App() {
    return (
        <div className="background">
            <h1 id="question">Are you looking for any of those projects?</h1>
            <ProjectList/>
        </div>
    );
}

export default App;
