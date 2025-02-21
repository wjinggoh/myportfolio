import './Aboutme.css';

function Aboutme(){
    return(
        <>
        <div className="head">
            <h1 className="name">Hi, I am Goh Wen Jing</h1>
            
        </div>

        <div className="summary">
        <h2 className="summaryTitle">Summary </h2>
        <h4>An inspired Software Engineer Student </h4>
        </div>
        <br/>

        <div className="education">
            <h1 className="edutitle">Education</h1>
            <h4 className="Edu1" style={{textAlign:"left",marginLeft:"30px"}}>Tunku Abdul Rahman University of Management and Technology</h4>
        </div>
        </>
    )
}
export default Aboutme