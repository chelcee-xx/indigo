import React, { useEffect } from "react";
import rest from "../img/restaurant.png";
import painting from "../img/painting.png";
import table from "../img/table.png";
import dish from "../img/dish.png";
import Aos from "aos";

export default function Gallery() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="slide-up" className="px-20">
      <div className="flex justify-center items-center flex-col">
        <h1 className="heading mt-14 tracking-wider">Our Gallery</h1>
        <div className="w-[60%] mt-5 mb-12">
          <p className="text-gray text-center">
            Lorem ipsum dolor sit amet consectetur. Arcu donec justo augue
            iaculis adipiscing nec faucibus. Lacus urna adipiscing amet facilisi
            hac risus mi nibh fermentum. Quisque sit ultrices arcu elit euismod
            tristique non condimentum et.{" "}
          </p>
        </div>
        <div class="grid grid-cols-3 grid-rows-2 gap-5">
          <div class="hover:scale-105 duration-200 col-span-2">
            <img alt="gallery" src={rest} />
          </div>
          <div class="hover:scale-105 duration-200 col-span-1 row-span-2">
            <img alt="gallery" src={dish}/>
          </div>
          <div class="hover:scale-105 duration-200 col-span-1 row-span-1">
            <img alt="gallery" src={table} />
          </div>
          <div class="hover:scale-105 duration-200 col-span-1 row-span-1">
            <img alt="gallery" src={painting} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
