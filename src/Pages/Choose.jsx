import './Choose.css';

function Choose({summaryRef,educationRef,moreRef}) {

        // Scroll function
        const scrollToSection = (ref) => {
            if (ref?.current) {
                ref.current.scrollIntoView({ behavior: "smooth", block:"start" });
            }
        };

    return (
        <div className="button-container">
            <button className="sbutton" onClick={()=>scrollToSection(summaryRef)}>Summary</button>
            <button className="ebutton" onClick={()=>scrollToSection(educationRef)}>Education</button>
            <button className="mbutton" onClick={()=>scrollToSection(moreRef)}>More About Me</button>
        </div>
    );
}

export default Choose;
