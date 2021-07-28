import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
    const images = [
        {
            id:1,
            image:'./header.jpg'
        },
        {
            id:2,
            image:'./puta.jpg'
        },
        {
            id:3,
            image:'./image0.png'
        },
        {
            id:4,
            image:'./pfp.png'
        }

    ]

    const [click, setClick] = useState(true);
    const [imgSrc, setImgSrc] = useState('');

    function handleClick(event){
        const {src} = event.target
        setClick(!click);
        setImgSrc(src);
    }
    return (
        <>
        <div className={!click ? "model open": "model" }>
            <img src={imgSrc}></img>
            <i class="fas fa-times" onClick={() => setClick(!click)}></i>
        </div>
        <div className="gallery-container">
            {images.map((item, index) => {
                return (
                    <div className="gallery-item"  key={index} onClick={click?handleClick :null}>
                        <img className="gallery-img" src={item.image} style={{width: '100%'}} alt="art"></img>
                    </div>
                )                
            })}
        </div>
        </>
    )
}

export default Gallery;
