import React, { useState } from "react";

function Home() {
    // 🔥 Store project list
    const [projects, setProjects] = useState([
        { id: 1, title: "Project 1", description: "This is project 1" },
        { id: 2, title: "Project 2", description: "This is project 2" }
    ]);

    return (
        <div>
            <h1>My Projects</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
