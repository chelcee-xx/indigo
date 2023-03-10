import React, { useEffect } from "react";
import { ReactComponent as Logo} from "../img/Logo_big.svg";
import { ReactComponent as Fbook } from "../img/fbook.svg";
import { ReactComponent as Insta } from "../img/insta.svg";
import twitter from "../img/twitter.png"
import Aos from "aos";

export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="flex bg-[#67000D] mt-5 pb-20 pt-28 pl-20 pr-0 text-white gap-14">
      <div className="basis-1/4">
        <Logo />
        <p className="mb-3 text-[15px] font-light mt-6">
          Lorem ipsum dolor sit amet consectetur. Arcu donec justo augue iaculis
          adipiscing nec faucibus. Lacus urna adipiscing amet facilisi hac risus
          mi nibh fermentum.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">CONTACT US</h4>
        <p className="mb-3 text-[15px] font-light">
          {" "}
          Address: 24th Avenue Tosin Street
        </p>
        <p className="mb-3 text-[15px] font-light"> Email: Adetosin2000@gmail.com</p>
        <p className="mb-3 text-[15px] font-light"> Phone: +12345566775</p>
        <div className="flex gap-5 mt-4">
            <Fbook className="cursor-pointer"/>
           <img src={twitter} alt="twitter" className="cursor-pointer"/>
            <Insta className="cursor-pointer"/>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">OPEN TIMES</h4>
        <p className="mb-3 text-[15px] font-light">
          MON - FRIDAY -------9:00AM - 12PM
        </p>
        <p className="mb-3 text-[15px] font-light">
          SATURDAY ---------- 8:00AM - 11PM{" "}
        </p>
        <p className="mb-3 text-[15px] font-light">
          SUNDAY ------------ 8:00AM - 11PM{" "}
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h4>
        <form className="flex flex-col items-center">
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            className="p-3 text-sm w-full rounded outline-none text-black"
          />
          <button className="bg-primary mt-3 py-2 w-1/2 hover:text-primary hover:bg-white font-medium">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
