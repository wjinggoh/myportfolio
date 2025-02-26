import './Aboutme.css';
import Choose from './Choose.jsx';
import Card from '../Components/Card'; 
import { useRef } from "react";

function Aboutme() {
    const summaryRef = useRef(null);
    const educationRef = useRef(null);
    const moreRef = useRef(null);

    return (
        <>
            <div className="head">
                <h1 className="name">Hi, I am Goh Wen Jing</h1>
                <Choose summaryRef={summaryRef} educationRef={educationRef} moreRef={moreRef} />
            </div>

            {/* Summary Section */}
            <div ref={summaryRef} className="summary">
                <Card 
                    title="Summary" 
                    content="A passionate Software Engineering graduate with expertise in web and mobile development, specializing in building interactive applications. Proficient in React, JavaScript, HTML, CSS, and Kotlin. Strong foundation in SDLC, software testing, and database management. Experienced in SQL, Firebase, and COBOL for legacy system development." 
                />
            </div>

            <br/>

            {/* Education Section */}
            <div ref={educationRef} className="education">
                <Card 
                    title="Education" 
                    content="Tunku Abdul Rahman University of Management and Technology - Bachelor in Software Engineering"
                />
            </div>

            {/* More About Me Section */}
            <div ref={moreRef} className="more">
                <Card 
                    title="More About Me" 
                    content="I enjoy exploring new technologies and constantly improving my skills. Passionate about software development, problem-solving, and teamwork in an agile environment."
                />
            </div>
        </>
    );
}

export default Aboutme;
