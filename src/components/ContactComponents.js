import React from 'react';
import './contact.css';
import contact from '../images/contact.png';

function ContactComponents() {
    return (
        <div className="content">
            <img className="contact-img" src={contact} alt="" />
            <h2 className="explain1">Get in touch</h2>
            <p className="explain2">Want to get in touch? We'd love to here from you.</p>
            <p className="explain3">Here's how you can reach us...</p>
            
            <div className="contact-boxes">
                <div className="contact-box1 shadow">  
                    <a href="https://accounts.google.com/">chaitanya.gb@gmail.com</a>  
                </div>
                <div className="contact-box2 shadow">  
                    <a href="https://www.facebook.com/profile.php?id=100006099960648">facebook//Chaitanya Bhat</a>
                </div>
            </div>
        </div>
    )
}

export default ContactComponents
