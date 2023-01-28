import Aos from "aos";
import React, { useEffect } from "react";
import menu from "../img/menu_bg.png";
import "aos/dist/aos.css";

export default function Cta() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="relative  text-white font-medium">
        <img data-aos="fade-up" src={menu} alt="background"></img>
        <div data-aos="fade-up"  data-aos-delay="300"className=" absolute top-[40%] left-0 right-0 flex items-center justify-center flex-col">
          {" "}
          <h1 className="text-6xl tex font-['viga'] text-white">
            EXPLORE OUR TASTY MENU
          </h1>
          <p className="text-center  w-[60%] font-light mt-7 mb-11">
            Lorem ipsum dolor sit amet consectetur. Lobortis ut dictum elit
            praesent ac. Integer commodo mattis diam et nibh risus. Tellus nunc
            magna sapien praesent platea elementum lacus.{" "}
          </p>
          <button className="border text-lg py-3 px-5 hover:bg-white hover:text-primary">View Full Menu</button>
        </div>
      </div>
    </>
  );
}
