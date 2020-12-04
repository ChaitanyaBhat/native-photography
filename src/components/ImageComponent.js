import React from 'react';
import styled from 'styled-components'
import { saveAs } from 'file-saver';
import './image.css';

const Img = styled.img`
    width: 100%;
    height: 400px;
    // object-fit: cover;
    object-fit: contain;
    &:hover {
        cursor: pointer;
        transition: 0.5s;
        transform: scale(1.13);
    }
`;

function ImageComponent(props) {
    
    function fullscreen(img_obj) {
        let url = img_obj.getAttribute('src');

        let modal;

        modal = document.createElement('div');
        modal.className = "modal";
        // modal.style.background = `RGBA(0,0,0,.5) url(${url}) no-repeat center`;
        modal.style.backgroundImage = `url(${url})`;

        
        let img_container = document.querySelector(".img-container");
        img_container.parentNode.appendChild(modal);

        let download_btn = document.createElement("button");
        download_btn.className = "download-btn";
        download_btn.innerText = "Save Image";
        download_btn.addEventListener("click", () => downloadImg());
        modal.appendChild(download_btn);

        let close_btn = document.createElement("button");
        close_btn.className = "close-btn";
        close_btn.innerText = "X";
        close_btn.style.zIndex = "200";
        close_btn.addEventListener("click", (e) => closeFullScreen(e.target.parentNode));
        modal.appendChild(close_btn);

        function closeFullScreen(parent_div) {
            parent_div.remove();
        }

        function downloadImg() {
            let img_path = url;
            let fileName = getFileName(img_path);
            saveAs(img_path, fileName);
        }

        function getFileName(str) {
            let file_name = str.substring(str.lastIndexOf('/') + 1);
            return file_name;
        }
    }

    return (
        <div className="img-container">
            <Img src={props.url} alt="" className="single-img" onClick={(e) => fullscreen(e.target)} />
        </div>
    )
}

export default ImageComponent

 