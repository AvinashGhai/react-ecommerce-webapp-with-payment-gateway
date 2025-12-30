import MainCarousel from "../../component/homeCarousel/maincarousel";
import React from "react";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";

const Homepage = () => {
  return (
    <>
      <MainCarousel />
      <p className="mt-6 text-lg font-semibold p-3 mb-1">Discover our featured products</p>
      <HomeSectionCarousel />
    </>
  );
};

export default Homepage;
