import React from 'react';
import ImageCard from './imageCards';
import './imageList.css';
const ImageList = (props) => {
    //    const images= props && props.images && props.images.map(({id,urls,description})=>{
    //         return <img key={id} src={urls.small} alt={description}/>
    //     })
    const images = props && props.images && props.images.map((image) => {
        return <ImageCard key={image.id} images={image} />
    })
    return <div className="image-list">{images}</div>

}
export default ImageList;