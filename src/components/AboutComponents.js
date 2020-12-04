import React from 'react';
import './about.css';
import camera from '../images/camera_girl.jpg';

function AboutComponents() {
    return (
        <div className="content">
            <div className="explain">
                <p>
                    One can find a variety of high resolution photographs here. No artificial lighting is used to capture any of them and are not modified after capturing.
                </p><br/>
                <img src={camera} className="camera-img" alt="" />
                <p>
                    By the way, I'm Chaitanya Bhat, born and brought up with my lovely brother, in a small town of Karnataka called <a href="https://en.wikipedia.org/wiki/Yellapur">Yellapur</a> located beside the Western Ghats. My parents, grand parents, brother, sisters and my teachers are the prestigious gems in my life. Currently I'm an intern in <a href="http://sathviksoftech.in">Sathvik Softech</a>.
                </p><br/>
                <p>
                    Phootograpy is one of my favorite hobbies. In fact, I created this website as a 'buy one get one free' formula; i.e to learn a little bit of React.js and not to limit my small photographic effort only to my local machine. Thanks to my sister who was kind enough to hand over her Canon EOS 600D Camera to me in my vacations. 
                 </p><br/>  
                <center>
                    <p>
                        Thank you for giving your precious time.
                    </p><br/>
                 </center>    
            </div>
        </div>
    )
}

export default AboutComponents;
