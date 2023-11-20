import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const codeProject = data.projects;
    let currentProject = codeProject[index];

    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }
    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <h3>Project: {currentProject.project}</h3>
            <h5>Description:</h5> 
                <p>{currentProject.description}</p>
                <img src={currentProject.example}/>
                <h5>{currentProject.caption}</h5>
        </div>
    );
}