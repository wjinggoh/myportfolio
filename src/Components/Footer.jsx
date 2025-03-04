import './Footer.css';
import footerGif from '../Resources/giphy.gif';

function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="footer-header">
            <h2>Footer</h2>
            <img className="smallGIF" src ={footerGif} alt="Animated GIF"/>
            </div>
            <p> &copy; 2025 Goh Wen Jing | Portfolio</p>

        </footer>
        </>
    );
}

export default Footer;
