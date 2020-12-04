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

function MistComponents() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        let is_mounted = true;
        let count = 0;

        async function fetchImages() {      
            
            let urls = ['https://user-images.githubusercontent.com/58632626/100737574-5cff2e00-33fa-11eb-9f96-682e4b5ba730.jpg',
                        'https://user-images.githubusercontent.com/58632626/100737582-5ffa1e80-33fa-11eb-8bdf-73c133637b22.jpg',
                        ];
    
            let next_urls =  ['https://user-images.githubusercontent.com/58632626/100737589-61c3e200-33fa-11eb-8d88-9ca5d57a9f97.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737599-638da580-33fa-11eb-977e-16dac3526ee6.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737610-65576900-33fa-11eb-9e87-bbbd9d00004d.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737619-68525980-33fa-11eb-991c-925902e2be40.JPG',
                            'https://user-images.githubusercontent.com/58632626/100737628-6ab4b380-33fa-11eb-9ad1-2ca7dfd19390.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737631-6c7e7700-33fa-11eb-86f0-d5648f22c636.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737639-6e483a80-33fa-11eb-9969-2dc2001c715b.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737702-83bd6480-33fa-11eb-9448-042254d1bfbf.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737737-920b8080-33fa-11eb-9872-a9d1efc380dd.jpg',
                            'https://user-images.githubusercontent.com/58632626/100739753-97b69580-33fd-11eb-94c0-5fb69a7c0098.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737748-96379e00-33fa-11eb-9a46-114380e5c275.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737756-9768cb00-33fa-11eb-824b-ac355a0bb006.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737761-99cb2500-33fa-11eb-8771-2a398dd8980f.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737766-9b94e880-33fa-11eb-8cf8-2e67fc19ed17.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737771-9d5eac00-33fa-11eb-8a93-6bea2974d643.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737777-a0f23300-33fa-11eb-85c3-b5f8aa484c0b.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737783-a2bbf680-33fa-11eb-9423-49fe1e980bac.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737789-a485ba00-33fa-11eb-983f-ba01ecff8a4a.jpg',
                            'https://user-images.githubusercontent.com/58632626/100737799-a8b1d780-33fa-11eb-8819-c9694548ece1.jpg',
                            'https://user-images.githubusercontent.com/58632626/100854910-9cd41d00-34af-11eb-9b56-5accae287a08.JPG',
                            'https://user-images.githubusercontent.com/58632626/100854916-9e9de080-34af-11eb-9a51-7c6a17d0af72.JPG',
                            'https://user-images.githubusercontent.com/58632626/100854921-a067a400-34af-11eb-8e6b-a709af6b0207.JPG',
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
    },[])

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

export default MistComponents
