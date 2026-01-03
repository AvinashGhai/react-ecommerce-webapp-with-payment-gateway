import MainCarousel from "../../component/homeCarousel/maincarousel";
import React from "react";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
import { men_kurta } from "../../../data/men/men_kurta.js";
import {men_jeans} from "../../../data/men/men_jeans.js";
import { men_shirts } from "../../../data/men/men_shirts.js";
import { women_dress } from "../../../data/women/women_dress.js";
import { Sarees } from "../../../data/women/saree.js";

const Homepage = () => {
  return (
    <>
      <div>
        <MainCarousel />
        <div className="space-y-10 py-8 flex flex-col justify-center px-5 lg:px-10">
            <p className="mt-6 text-lg font-semibold p-3 mb-1">Discover our featured products</p>
            <HomeSectionCarousel data={men_kurta} sectionName="Men's Kurtas" />
            <HomeSectionCarousel data={men_jeans} sectionName="Men's Jeans" />
            <HomeSectionCarousel data={men_shirts} sectionName="Men's Shirts" />
            <HomeSectionCarousel data={Sarees} sectionName="Women's Sarees" />
            <HomeSectionCarousel data={women_dress} sectionName="Women's Lehengas & Cholis " />
        </div>
      </div>
    </>
  );
};

export default Homepage;
