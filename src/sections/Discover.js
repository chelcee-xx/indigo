import React from "react";
import Pic from "../img/discover.png";

export default function Discover() {
  return (
    <div className="flex">
      <div className="mr-20 w-[60%] text-justify">
        <h1 className="heading mb-4">Discover Taste</h1>
        <p className="words">
          Lorem ipsum dolor sit amet consectetur. Est malesuada sociis pretium
          nibh. Enim nulla viverra eget diam senectus pellentesque pulvinar urna
          id. Tortor nunc dapibus lacus nisl venenatis elementum quis eget amet.
          Netus pellentesque commodo libero egestas maecenas fames. Elit nisl
          rutrum massa elit integer. Sit orci eleifend tempus ut vel amet
          fermentum. Quisque elementumsuspendisse donec quis eget lobortis
          pulvinar. Volutpat sapien morbi bibendum egestas ipsum maecenas.
          Lectus fringilla varius arcu quisque non egestas ac nec.Felis nunc
          dapibus laoreet tincidunt. Enim donec egestas dolor dapibus rutrum in.
          Nisl pretium enim cras faucibus. Et vitae odio neque hendrerit
          pellentesque morbi lobortis sagittis. Blandit amet quisque nec
          accumsan egestas. Odio dignissim diam urna in ornare.
        </p>
        <button className="border py-3 px-5 text-white bg-primary mt-4 hover:bg-white hover:text-primary">Explore Now</button>

      </div>
      <div className="">
        <img src={Pic} alt="plates" />
      </div>
    </div>
  );
}
