import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouseldata.js';

const MainCarousel = () => {
        const items = MainCarouselData.map((item) => (
            <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-gray-100">
    <img
        src={item.image}
        alt={item.alt}
        className="w-full h-full object-cover object-center"
    />
    </div>
));

    return (
        <AliceCarousel
            autoPlay
            autoPlayControls
            autoPlayStrategy="none"
            autoPlayInterval={1000}
            animationDuration={1000}
            animationType="fadeout"
            infinite
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
        />
    );
}

export default MainCarousel;