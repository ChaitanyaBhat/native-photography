import React from 'react';
import './index.css';
import duck from '../images/duck.jpg';

function IndexComponents() {
    return (
        <div className="container">
            <img className="duck-img" src={duck} alt="" />
            <div className="links">
                <a href="/mist" className="mist-link">Mist Miracles</a>
                <a href="/landscape" className="nature-link">Ocean Outcomes</a>
                <a href="/flower" className="flower-link">Flowered Flora</a>
                <a href="/bird" className="bird-animal-link">Finest Fauna</a>
                <a href="/other" className="other-link">Et ceteras</a> 
            </div>
            <div className="footer">
                <label className="authority">© Designed, developed and maintained by</label>
                <a href="http://sathviksoftech.in" className="sathvik-link">Sathvik Softech</a>
                <label className="copyright"> The photographs in this website are subjected to Copyright act 2020</label>
            </div>
        </div>
    )
}

export default IndexComponents
