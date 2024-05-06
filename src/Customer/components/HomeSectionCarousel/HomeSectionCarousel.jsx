import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';

export const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const productCount = 5;
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if(activeIndex > 0)
        {
            setActiveIndex(activeIndex - 1);
        }
    };

    const slideNext = () => {
        if(activeIndex < productCount)
        {
            setActiveIndex(activeIndex + 1);
        }
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };

    const items = data.slice(0, 10).map((product, index) => (
        <HomeSectionCard key={index} product={product} />
    ));

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5 border'>
                <AliceCarousel
                    key={activeIndex}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                <Button
                    variant="contained"
                    onClick={slideNext}
                    className="z-50 bg-white"
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        right: "0rem",
                        transform: "translateX(50%) rotate(90deg)",
                        bgcolor: "white"
                    }}
                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>

                <Button
                    onClick={slidePrev}
                    variant="contained"
                    className="z-50 bg-white"
                    sx={{
                        position: "absolute",
                        top: "8rem",
                        left: "0rem",
                        transform: "translateX(-50%) rotate(-90deg)",
                        bgcolor: "white"
                    }}
                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
            </div>
        </div>
    );
};
