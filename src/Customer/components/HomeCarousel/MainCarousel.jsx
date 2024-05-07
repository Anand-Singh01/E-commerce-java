import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './HomeCarouselData';

export const MainCarousel = () => {
    const items = mainCarouselData.map(({ image }) => {
        return <img className='cursor-pointer -z-10' role='presentation' 
        alt='' src={image}></img>
    })
    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={5000}
            infinite
        />
    )
};