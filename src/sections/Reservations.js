import React from "react";
import menu from "../img/reserve.png";

export default function Reservations() {
  return (
    <div>
      <div className="relative  text-white font-medium">
        <img src={menu} alt="background"></img>
        <div className=" absolute top-[40%] left-0 right-0 flex items-center justify-center flex-col">
          {" "}
          <h1 className="text-4xl font-['viga'] text-white">
            Let's Save a space for you
          </h1>
          <p className="text-center  w-[60%] font-light mt-7 mb-11">
            Lorem ipsum dolor sit amet consectetur. Lobortis ut dictum elit
            praesent ac. Integer commodo mattis diam et nibh risus. Tellus nunc
            magna sapien praesent platea elementum lacus.{" "}
          </p>
          <button className="border py-3 px-5 hover:bg-white hover:text-primary">Make Reservation</button>
        </div>
      </div>
    </div>
  );
}
