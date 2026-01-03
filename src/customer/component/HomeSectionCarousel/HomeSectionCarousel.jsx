import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../../component/HomeSectionCard/HomeSectionCard.jsx";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = ({ data = [], sectionName }) => {
  const carouselRef = useRef(null);

  if (!data.length) return null;

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  return (
    <div className="relative px-4">
      {/* SECTION TITLE */}
      <div className="flex items-center justify-between py-4">
        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">
          {sectionName}
        </h2>

        <button className="text-sm font-medium text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          mouseTracking
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
        />

        {/* LEFT */}
        <IconButton
          onClick={() => carouselRef.current?.slidePrev()}
          sx={{
            position: "absolute",
            top: "50%",
            left: "-20px",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>

        {/* RIGHT */}
        <IconButton
          onClick={() => carouselRef.current?.slideNext()}
          sx={{
            position: "absolute",
            top: "50%",
            right: "-20px",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 2,
            "&:hover": { bgcolor: "#f5f5f5" },
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
