import './Aboutme.css';
import Choose from './Choose.jsx';  // ✅ Ensure file exists in the same directory
import { useRef } from "react";  // ✅ Import useRef


function Aboutme(){

    const summaryRef = useRef(null);
    const educationRef = useRef(null);
    const moreRef = useRef(null);
    return(
        <>
        <div className="head">
            <h1 className="name">Hi, I am Goh Wen Jing</h1>
            <Choose summaryRef={summaryRef} educationRef={educationRef} moreRef={moreRef}/>
        </div>

        <div ref={summaryRef}className="summary">
        <h2 className="summaryTitle">Summary </h2>
        <h4 className="description">A passionate Software Engineering graduate with expertise in web 
            and mobile development, specializing in building interactive and 
            user-friendly applications using modern technologies. Proficient
             in both frontend and backend development, with hands-on experience
              in React, JavaScript, HTML, CSS, and Kotlin for mobile applications.
              Strong foundation in Software Development Life Cycle (SDLC), software testing, 
              and database management, with experience working on SQL and Firebase for data storage 
              and authentication. Gained practical exposure to legacy system development using COBOL 
              during an internship, allowing a deeper understanding of maintaining and modernizing enterprise systems.
              Adept at debugging, performance optimization, and problem-solving, with a keen eye for detail and usability. 
              A proactive and adaptable team player, capable of collaborating effectively in agile environments. Passionate 
              about learning new technologies, staying updated with industry trends, and continuously improving coding skills.
              Currently seeking an opportunity to contribute innovative solutions and enhance technical expertise in the technology 
              sector, particularly in React development, mobile app development, or full-stack web development.</h4>
        </div>
        <br/>

        <div ref={educationRef}className="education">
            <h1 className="edutitle">Education</h1>
            <h4 className="Edu1" style={{textAlign:"left",marginLeft:"30px"}}>Tunku Abdul Rahman University of Management and Technology</h4>
        </div>
        <div ref={moreRef}className="more">
            <h1>More about me</h1>
        </div>
        </>
    )
}
export default Aboutme