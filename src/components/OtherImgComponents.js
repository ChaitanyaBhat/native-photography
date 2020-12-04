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

function OtherImgComponents() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        let is_mounted = true;
        let count = 0;

        async function fetchImages() {
            
            let urls = ['https://user-images.githubusercontent.com/58632626/100835166-34774280-3493-11eb-8258-e1e24da0f01c.jpg',
                    'https://user-images.githubusercontent.com/58632626/100835209-4527b880-3493-11eb-9fe4-acde7949f623.jpg',
                        ];
    
            let next_urls =  ['https://user-images.githubusercontent.com/58632626/100835215-46f17c00-3493-11eb-9c49-d8dfb593cbe7.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835224-4a850300-3493-11eb-8af8-c52283e8c3fe.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835231-4bb63000-3493-11eb-83a2-c1b62ed9dfbf.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835227-4a850300-3493-11eb-83a8-f73dcb66b7f0.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835238-4eb12080-3493-11eb-835d-7c71abaa0b83.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835186-3fca6e00-3493-11eb-9086-ca8f78e7474e.jpg', 
                            'https://user-images.githubusercontent.com/58632626/100980709-a6bb5600-356b-11eb-93be-c31dce732168.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980716-a91db000-356b-11eb-9151-2dca27acdc96.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980739-b63a9f00-356b-11eb-9897-773ecc0791b8.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980744-b8046280-356b-11eb-9153-7fd6c9d3e149.jpg',                    
                            'https://user-images.githubusercontent.com/58632626/100835169-36d99c80-3493-11eb-9002-8834a062cae2.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835182-3c36e700-3493-11eb-9f8a-b025198e7035.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835196-422cc800-3493-11eb-9450-f30df2977d16.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980752-bf2b7080-356b-11eb-8ea3-6ade5e2c5d1b.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835205-43f68b80-3493-11eb-93e6-30927591fc83.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835179-3a6d2380-3493-11eb-830b-11210d14f086.jpg',
                            'https://user-images.githubusercontent.com/58632626/100835171-38a36000-3493-11eb-9f04-b55b13f040ce.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980800-d23e4080-356b-11eb-9bad-b11b14b5fff4.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980814-d79b8b00-356b-11eb-8222-9eea9a3fa840.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980820-d9fde500-356b-11eb-9209-9e66e67757db.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980825-dbc7a880-356b-11eb-9380-51a2d092afd6.jpg',
                            'https://user-images.githubusercontent.com/58632626/100980835-df5b2f80-356b-11eb-860e-afcbabd3d4c3.jpg',
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

export default OtherImgComponents;
