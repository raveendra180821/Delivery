import React from "react";

import './footer.css'
import { assets } from "../../assets/assets";

const Footer = () => {

    return(
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-left-content">
                    <h1>Food Delivery</h1>
                    <p>Download the app today and join thousands of satisfied customers who rely on us for convenient, reliable food delivery. Stay connected for delicious updates! Follow us on social media for mouthwatering dishes, exclusive deals, and speedy deliveries.</p>
                    <div className="footer-social-icons">
                        <img src={assets.linkedin_icon} alt="linkedIn" />
                        <img src={assets.twitter_icon} alt="twitter" />
                        <img src={assets.facebook_icon} alt="facebook" />
                    </div>
                </div>
                <div className="footer-center-content">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-right-content">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1 213-0987-0078</li>
                        <li>contact@fooddelivery.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright"> Copyright © 2024 - fooddelivery.com- All Right Reserved.</p>
        </div>
    )
}

export default Footer