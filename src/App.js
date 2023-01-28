import "./index.css";
import { ReactComponent as Logo } from "./img/logo.svg";
import About from "./sections/About";
import Discover from "./sections/Discover";
import Cta from "./sections/Cta";
import Reservations from "./sections/Reservations";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";
import Menu from "./sections/Menu";

function App() {
  return (
    <div className="">
      <div className="relative h-screen font-medium bg-[url('./img/main_bg.png')] bg-cover px-20 pt-12">
        <nav className="flex text-white justify-between items-center">
          <Logo />
          <div className="flex [&>*]:m-6 cursor-pointer">
            <a>Home</a>
            <a>Menu</a>
            <a>About Us</a>
            <a>Contact Us</a>
          </div>
          <div>
            <button className="rounded-full border px-4 py-2">
              Reservations
            </button>
          </div>
        </nav>
        <div className="flex absolute bottom-36 left-0 right-0 justify-center text-white ">
          <button className=" scroll-mt-96 border py-3 px-5 hover:bg-white hover:text-primary">
            View Menu
          </button>
        </div>
      </div>
      <div className="px-20">
        <div>
          <div className=" relative -top-32  pt-12">
            <About />
          </div>
        </div>
        <div>
          <Discover />
        </div>{" "}
      </div>
      <div className="mt-24">
        <Cta />
        <Menu />
        <Reservations />
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default App;
