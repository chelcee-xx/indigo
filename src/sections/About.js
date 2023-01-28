import Aos from "aos";
import React, { useEffect} from "react";
import { ReactComponent as Cutlery } from "../img/cutlery.svg";
import men from "../img/men.png";

function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div  data-aos="slide-up" className="bg-white shadow-md">
      <div className=" flex items-center">
        <div>
          <img src={men} alt="dine" />
        </div>
        <div className="w-[60%] px-20 text-justify">
          <h2 className="heading mt-12 mb-6  text-center">
            ABOUT US
          </h2>
          <p className="words">
            / ND / GO Restaurant & Bar, an American, Asian, and Caribbean fusion
            eatery located in Brooklyn New York , offers an international twist
            on food and culture combining local and foreign perspectives. IN /
            DINE / GO.LOUNGE is a new upscale and refined lounge dining concept.
            We encourage our patrons far and near to come in, dine, and
            GO.Lounge in our enclosed heated outdoor spanish terrace, (36 seat).
            Our Restaurant boasts 2 additional dine-in (40 seat) lounges, sure
            to satisfy all parties sizes. We pride ourselves in luxe originality
            and curating the 'new classic' of dine-in experiences unlike
            anywhere else.
          </p>
          <div className="flex mt-5 justify-center">
          <Cutlery /></div>
        </div>
      </div>
    </div>
  );
}

export default About;
