import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
.lds-grid {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 40px;
  }
  .lds-grid div {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
    // background: #000000;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 12px;
    left: 0px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 12px;
    left: 6px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 12px;
    left: 12px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 21px;
    left: 0px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 21px;
    left: 6px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 21px;
    left: 12px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 30px;
    left: 0px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 30px;
    left: 6px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 30px;
    left: 12px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }  
.lds-grid:hover {
  cursor: pointer;
}
.container-div {
    display: none;
    position: absolute;
    z-index: 15;
    text-align: left;
    box-shadow: 10px 0px 5px 0px white;
 }
 .container-div li:hover {
    background-color: rgb(1, 43, 77);
 }

 .main-menu-ul {
    width: 120px;
}
 .main-menu-ul > li {
    list-style-type: none;
    background-color: rgb(1, 66, 97);
    padding: 0px 10px 0px 0px;
    height: 35px;
    width: 120px;
    border-bottom: 1px solid white;
    box-shadow: 5px 5px 15px 0px  rgb(3, 97, 126);
    font-size: 18px
 }
 .main-menu-ul a {
    text-decoration: none;
    color: white;
    display: inline-block;
    width: 100%;
    height: 90%;
    padding: 5px 0px 0px 10px;

 }
`;

function SideMenu() {
  
  function displayMenu() {
    let dropdown_div  = document.querySelector(".container-div");
    if(dropdown_div.style.display === "block") {
      dropdown_div.style.display = "none"
    }
    else {
      dropdown_div.style.display = "block";
    }
  }

  return (
    <Menu onClick={ displayMenu }>
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    
        <div className="container-div">
            <ul className="main-menu-ul"> 
                <li className="dropdown-li"><a href="/mist">Mist</a></li>
                <li className="dropdown-li"><a href="/landscape">Ocean</a></li>
                <li className="dropdown-li"><a href="/flower">Flower</a></li>
                <li className="dropdown-li"><a href="/bird">Bird & Animal</a></li>
                <li className="dropdown-li"><a href="/other">Other</a></li>
            </ul>
        </div>
    </Menu>
  )
}

export default SideMenu
