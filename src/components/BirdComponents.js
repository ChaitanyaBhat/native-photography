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

function BirdComponents() {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        let is_mounted = true;
        let count = 0;

        async function fetchImages() {      
        
            let urls = ['https://user-images.githubusercontent.com/58632626/100727622-844efe80-33ec-11eb-908f-4028c4ad1901.jpg',
                    'https://user-images.githubusercontent.com/58632626/100727633-86b15880-33ec-11eb-8bfd-489e08370796.jpg',
                    ];
    
            let next_urls =  ['https://user-images.githubusercontent.com/58632626/100727642-89ac4900-33ec-11eb-9988-2ca87e65ecee.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727653-8d3fd000-33ec-11eb-9345-cf9aabe5cb18.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727662-8f099380-33ec-11eb-8a56-df6220c7dac6.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727667-929d1a80-33ec-11eb-823f-374308c4c5ad.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727670-9335b100-33ec-11eb-85de-712cefb8f789.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727675-94ff7480-33ec-11eb-9433-1472a320c0d1.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727679-96c93800-33ec-11eb-9421-95a154a1fb99.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727689-992b9200-33ec-11eb-8657-086bdbcc2ad9.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727696-9b8dec00-33ec-11eb-8efa-e19d43a4e27b.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727708-9f217300-33ec-11eb-97f4-6325c46f2292.jpg',
                            'https://user-images.githubusercontent.com/58632626/100974423-3eb44200-3562-11eb-8303-6e3ffd0f848d.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727725-a47ebd80-33ec-11eb-80b2-38a6009d326c.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727734-a8aadb00-33ec-11eb-8e69-6b3e4954d9b4.jpg',
                            'https://user-images.githubusercontent.com/58632626/100974432-41169c00-3562-11eb-8205-f5fbd3babcbc.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727745-aa749e80-33ec-11eb-910d-9869144f08f2.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727753-aba5cb80-33ec-11eb-9d40-b4d8ed8a6d84.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727759-ae082580-33ec-11eb-8926-43f56909f0c6.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727776-b2344300-33ec-11eb-9f02-dd7519a4905d.jpg',
                            'https://user-images.githubusercontent.com/58632626/100974437-4247c900-3562-11eb-9c90-2af3e0dabb29.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727793-b6606080-33ec-11eb-92b7-86f2df75172b.jpg',
                            'https://user-images.githubusercontent.com/58632626/100728034-093a1800-33ed-11eb-8e23-3f35addaf329.jpg',
                            'https://user-images.githubusercontent.com/58632626/100727782-b3fe0680-33ec-11eb-8924-46bb579b8f62.jpg',
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

export default BirdComponents;
