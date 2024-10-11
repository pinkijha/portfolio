import { FaHeart } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {

   
    
    return (
        <div className="footer flex flex-col sm:flex-row justify-center items-center text-center p-4 bg-gray-100">
            <p className="px-1">Created By</p> 
            <p className="footerHeartIcon"><FaHeart /></p>            
            <a 
                className="px-1 text-blue-600 hover:text-blue-800" 
                href="https://www.linkedin.com/in/pinkijha/" 
                target="_blank"   style={{'color': 'white'}}
                rel="noopener noreferrer"
            >
                Pinki Jha | 
            </a>
            <span className="footerCopyRightIcon"> <FaCopyright /></span>
            <p className="px-1" style={{'padding': '0px 4px'}}>2024</p>
            <p className="px-1">PortFolio</p>
        </div>
    );
};

export default Footer;
