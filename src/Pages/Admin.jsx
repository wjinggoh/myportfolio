import React, { useState } from "react";
import "./Admin.css"; 

function Admin() {
    const [projects, setProjects] = useState([
        { id: 1, title: "Project 1", description: "This is project 1" }
    ]);

    const [newProject, setNewProject] = useState({ title: "", description: "" });

    // ✅ Function to add a project
    const addProject = () => {
        if (!newProject.title || !newProject.description) return;
        const updatedProjects = [...projects, { id: Date.now(), ...newProject }];
        setProjects(updatedProjects);
        setNewProject({ title: "", description: "" });
    };

    const deleteProject = (id) => {
        setProjects(projects.filter((project) => project.id !== id));
    };

    return (
        <div className="admin-container">
            <h1 className="adminTitle">Admin Module(Hidden Module)</h1>

<form>
    <div className="formsInput">
        <h2 
        style={{
            display:"block"
        }}>
            Project Title</h2>
        <input className="projectTitle" placeholder="Your Project Title" 
        style={{
            border:"none",
            borderRadius:"30px",
            height:"50px",
            paddingLeft:"15px",
            display:"block",
            width:"200px"
            }}/>
    </div>
</form>
          {/*  <div className="inputs">
                <input 
                className="title" 
                    type="text"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                />
                <textarea
                className="desc" 
                    type="text"
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                />
            </div>*/}

        </div>
    );
}

export default Admin;
