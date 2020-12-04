import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import Loader from './Loader';
import ImageComponent from './ImageComponent';

const ImageWrapper = styled.section`
    max-width: 79rem;
    margin: 2rem auto;
    display: grid;
    grid-gap: 0.5em;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 395px;
    `;

function LandscapeComponents() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        let is_mounted = true;
        let count = 0;

        async function fetchImages() {  
            
            let urls = ['https://user-images.githubusercontent.com/58632626/100572787-5ab6aa00-32fc-11eb-9e30-3d603b7b8009.jpg',
                    'https://user-images.githubusercontent.com/58632626/100572818-715d0100-32fc-11eb-811d-3fee62260862.jpg',
                    ];
    
            let next_urls =  ['https://user-images.githubusercontent.com/58632626/100572944-bbde7d80-32fc-11eb-9a71-52d03324e7cb.jpg',
                            'https://user-images.githubusercontent.com/58632626/100572927-b4b76f80-32fc-11eb-87a4-76a3b0a50c13.jpg',
                            'https://user-images.githubusercontent.com/58632626/100572956-c13bc800-32fc-11eb-8bbb-ab1a704f4e11.jpg',
                            'https://user-images.githubusercontent.com/58632626/100572966-c6007c00-32fc-11eb-8330-9382639e4bb8.jpg',
                            'https://user-images.githubusercontent.com/58632626/100572981-d0bb1100-32fc-11eb-9484-498106459d72.jpg',
                            'https://user-images.githubusercontent.com/58632626/100572977-cbf65d00-32fc-11eb-98db-bbbb3ad3b12e.jpg',
                            'https://user-images.githubusercontent.com/58632626/100572994-d57fc500-32fc-11eb-9712-884970f6848f.jpg',
                            'https://user-images.githubusercontent.com/58632626/100573013-dfa1c380-32fc-11eb-8ce0-9f7f18d552be.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574022-1f69aa80-32ff-11eb-9f06-1e41d0f73465.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574016-1a0c6000-32ff-11eb-96b0-1c1e5b605344.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574030-22649b00-32ff-11eb-8f65-8c674901693a.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574041-285a7c00-32ff-11eb-82bb-683c43993eca.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574061-33151100-32ff-11eb-863e-9d13aaa265e9.jpg',
                            'https://user-images.githubusercontent.com/58632626/100974372-2b08db80-3562-11eb-9243-3b809e40dfb2.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574049-2bee0300-32ff-11eb-89f9-66749138576c.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574077-3b6d4c00-32ff-11eb-900e-1632eb97f9e9.jpg',
                            'https://user-images.githubusercontent.com/58632626/100974382-2d6b3580-3562-11eb-8121-6f2b2dbae544.jpg',
                            'https://user-images.githubusercontent.com/58632626/100574071-37d9c500-32ff-11eb-92de-9c92b6482982.jpg',
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
                <ImageComponent key={i} url={image}/>
            ))}
            </ImageWrapper>
            <Loader/>
        </div>
    )
}

export default LandscapeComponents;
