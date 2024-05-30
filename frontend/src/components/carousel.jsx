"use client";
 
import { Carousel } from "flowbite-react";
 
 
 
const MyCarousel = () => {
  return (
    <div className="h-56  sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel slideInterval={3000}>
        <img src="src/assets/carousel/nens.png" alt="..." />
        <img src="src/assets/carousel/clase.png" alt="..." />
        <img src="src/assets/carousel/clas.png" alt="..." />
        <img src="src/assets/carousel/moni2.png" alt="..." />
        <img src="src/assets/carousel/pre.png" alt="..." />
      </Carousel>
    </div>
  );
}
export default MyCarousel;