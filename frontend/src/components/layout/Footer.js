import './Footer.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="container mt-5 bg-light rounded">
            <div className="row">
                    <div className="col-sm-12 col-md-8 mt-2">
                        <h2>About US</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut praesentium laboriosam veniam excepturi minus cupiditate architecto officiis neque, saepe deserunt?</p>
                    </div>
                    <div className="col-sm-12 col-md-4 mt-2">
                        <div className="d-flex">
                            <PhoneIcon style={{color: '#1f3e2e', marginRight: '10px'}} />
                            <p>0123456789</p>
                        </div>
                        <div className="d-flex">
                            <EmailIcon style={{color: '#1f3e2e', marginRight: '10px'}} />
                            <p>food.me.info@gmail.com</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <FacebookIcon style={{color: '#4f78ba', marginRight: '10px'}} />
                            <TwitterIcon style={{color: '#1d9bf0', marginRight: '10px'}} />
                            <InstagramIcon style={{color: '#e12958', marginRight: '10px'}} />
                        </div>
                        
                    </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-around footer_links">
                    <ul> 
                        <span>Customer Service</span>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <span>About Us</span>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                    </ul>
                    <ul>
                        <span>For Business</span>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;