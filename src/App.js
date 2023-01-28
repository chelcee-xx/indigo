import "./index.css";
import { ReactComponent as Logo } from "./img/logo.svg";
import About from "./sections/About";
import Discover from "./sections/Discover";
import Cta from "./sections/Cta";
import Reservations from "./sections/Reservations";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";
import Menu from "./sections/Menu";
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const menu = useRef(null);
  const us = useRef(null);
  const contact = useRef(null);

  function scroll() {
    menu.current.scrollIntoView();
  }

  function about() {
    us.current.scrollIntoView();
  }

  function footer() {
    contact.current.scrollIntoView();
  }

  return (
    <div className="">
      <div className="relative h-screen font-medium bg-[url('./img/main_bg.png')] bg-cover px-20 pt-12">
        <nav className="flex text-white justify-between items-center">
          <Logo />
          <div className="  flex [&>*]:m-6 [&>*]:cursor-pointer">
            <p>Home</p>
            <p onClick={scroll}>Menu</p>
            <p onClick={about}>About Us</p>
            <p onClick={footer}>Contact Us</p>
          </div>
          <div>
            <button className="rounded-full border px-4 py-2">
              Reservations
            </button>
          </div>
        </nav>
        <div className="flex absolute bottom-36 left-0 right-0 justify-center text-white ">
          <button className=" scroll-mt-96 border py-3 font-medium hover:bg-primary duration-500 ease-in hover:border-primary px-9 text-lg -">
            View Menu
          </button>
        </div>
      </div>
      <div className="px-20">
        <div>
          <div ref={us} className=" relative -top-32  pt-12">
            <About />
          </div>
        </div>
        <div className="opacity-1 translate-y-0">
          <Discover />
        </div>{" "}
      </div>
      <div className="mt-24">
        <div>
          <Cta />
        </div>
        <div ref={menu}>
          <Menu />
        </div>{" "}
        <div>
          <Reservations />
        </div>
        <div >
          {" "}
          <Gallery />
        </div>{" "}
        <div ref={contact}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
