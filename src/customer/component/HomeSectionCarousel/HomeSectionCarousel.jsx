import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from "../../component/HomeSectionCard/HomeSectionCard.jsx";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = () => {
    const items = [1,1,1,1,1,1,1].map((item) => <HomeSectionCard key={item} />);

    const responsive = {
        0: { items: 1 },
        720: { items: 4 },
        1024: { items: 5.5 },
    };
  return (
    <div className='relative px-4 lg-px-8 '>
      <div className='relative p-5 '>
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
      <button><KeyboardArrowLeftIcon /></button>
      <button><KeyboardArrowRightIcon /></button>
      
      </div>
    </div>
  )
}

export default HomeSectionCarousel