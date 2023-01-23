import "./index.css";
import { ReactComponent as Logo } from "./img/logo.svg";

import About from "./sections/About";

function App() {
  return (
    <div className="relative">
      <div className="relative h-screen font-medium bg-[url('./img/main_bg.svg')] bg-cover px-28 pt-12">
        <nav className="flex text-white justify-between ">
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
          <button className=" scroll-mt-96 border py-3 px-5 hover:bg-white hover:text-primary">View Menu</button>
        </div>
      </div>
      <div className="absolute -bottom-[420px] px-28 pt-12">
        <About/>
      </div>
     

    </div>
  );
}

export default App;
