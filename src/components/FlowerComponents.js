import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Loader from './Loader';
import ImageComponent2 from './ImageComponent2';

const ImageWrapper = styled.section`
        max-width: 79rem;
        margin: 2rem auto;
        display: grid;
        grid-gap: 0.5em;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 250px;
    `;


function FlowerComponents() {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        let is_mounted = true;
        let count = 0;

        async function fetchImages() {      
            
            let urls = ['https://user-images.githubusercontent.com/58632626/100710378-a1c49e00-33d5-11eb-950c-05b6c9c8c8ee.jpg',
                    'https://user-images.githubusercontent.com/58632626/100867430-36a3c600-34c0-11eb-8037-c98e58599218.jpg',
                    ];

            let next_urls =  ['https://user-images.githubusercontent.com/58632626/100710404-ab4e0600-33d5-11eb-8980-738ab9f44f33.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710415-aee18d00-33d5-11eb-8647-7e8c17c2445a.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710443-bc971280-33d5-11eb-8fb7-c17df0b71f78.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710452-c0c33000-33d5-11eb-846a-efe01970d3c3.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710463-c3be2080-33d5-11eb-87c0-08f7c9a363d3.jpg',
                            'https://user-images.githubusercontent.com/58632626/100867438-39062000-34c0-11eb-87b9-a462dd7830f5.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710475-c91b6b00-33d5-11eb-81b9-ddfdaebaa36a.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710480-ccaef200-33d5-11eb-8ed9-a21ec4f4b23c.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710490-d0427900-33d5-11eb-9791-2e3faced98c1.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710494-d20c3c80-33d5-11eb-84b3-a7bae1c01c50.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710500-d33d6980-33d5-11eb-8fee-7bab846ee6b4.jpg',
                            'https://user-images.githubusercontent.com/58632626/100867537-5b983900-34c0-11eb-9f93-b26a56786d37.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710513-d8021d80-33d5-11eb-9dfc-77b9bab54320.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710526-dc2e3b00-33d5-11eb-8cd1-fc5deacd1bab.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710532-ddf7fe80-33d5-11eb-9d02-bcb3f874005a.jpg',
                            'https://user-images.githubusercontent.com/58632626/100867505-4f13e080-34c0-11eb-912e-bd23ebcdcb81.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710506-d59fc380-33d5-11eb-9f24-f851c2be5bb6.jpg',
                            'https://user-images.githubusercontent.com/58632626/100710554-e51f0c80-33d5-11eb-8a25-1d6dd7fa37d5.jpg',
                            'https://user-images.githubusercontent.com/58632626/100867445-3acfe380-34c0-11eb-8124-614ab29a9b11.jpg',
                            'https://user-images.githubusercontent.com/58632626/100867632-79fe3480-34c0-11eb-82ee-a2ba731755b2.jpg',
                            'https://user-images.githubusercontent.com/58632626/100867469-43c0b500-34c0-11eb-8292-c7503de74c1e.jpg',
                            'https://user-images.githubusercontent.com/58632626/100974343-1debec80-3562-11eb-81c3-86c22f0071b3.jpg',                    
                            ];

            setImages(urls);
        
            let timer_id = setInterval(() => {
                if( count < next_urls.length && is_mounted ) {
                    setImages((prev_images) => [...prev_images, next_urls[count]] );
                }
                else {
                    clearInterval(timer_id);
                } 
                ++count;
            }, 2000)
        
        }

        fetchImages();
        return () => {is_mounted = false}
    }, [])
    
    return (
        <div>
            <ImageWrapper>
                {images.map((image, i) => (
                    <ImageComponent2 key={i} url={image}/>
                ))}
            </ImageWrapper>
            <Loader/>
        </div>
    )
}

export default FlowerComponents;
