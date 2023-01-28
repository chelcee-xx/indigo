
import React from "react";
import { image } from "../img";
import tomato from "../img/tomato.png";


export default function Menu() {
 

  let menu = [
    {
      Name: "Chicken and Waffles",
      Price: "11.29",
      img: image.food,
    },
    {
      Name: "bread and Tea",
      Price: "2.59",
      img: image.tea,
    },
    {
      Name: "French Toast",
      Price: "1.89",
      img: image.tea,
    },
    {
      Name: "Breakfast sausage",
      Price: "1.29",
      img: image.sausage,
    },
    {
      Name: "Avocado Toast",
      Price: "6.29",
      img: image.avocado,
    },
    {
      Name: "Pancake and Bacon",
      Price: "3.19",
      img: image.pancake,
    },
    {
      Name: "Bacon",
      Price: "2.00",
      img: image.Bacon,
    },
    {
      Name: "Fries and Sauce",
      Price: "1.29",
      img: image.fries,
    },
  ];

  const links = [
    "APPETIZERS",
    "BREAKFAST",
    "DESSERTS",
    "SOUP",
    "SALAD",
    "DRINKS",
  ];

  return (
    <div className="mb-20  relative">
      <img
        src={tomato}
        alt="tomato"
        className="absolute right-0 -bottom-16 -z-50"
      />
      <div className="flex items-center flex-col">
        <h1 className="heading mt-14">Menu</h1>
        <div className="w-[60%] mt-5 mb-12">
          <p className="text-gray text-center">
            Lorem ipsum dolor sit amet consectetur. Arcu donec justo augue
            iaculis adipiscing nec faucibus. Lacus urna adipiscing amet facilisi
            hac risus mi nibh fermentum. Quisque sit ultrices arcu elit euismod
            tristique non condimentum et.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center px-20">
        <ul className="mr-12 ">
          {links.map((link, index) => (
            <li
              className="text-gray mb-5 w-28 text-sm font-light hover:font-medium cursor-pointer hover:text-primary"
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-y-6 gap-x-9">
          {menu.slice(0, 4).map((food, index) => (
            <div className="flex items-start" key={index}>
              <img src={food.img} alt={food.Name} className="w-16 mr-4" />
              <div className="text-lg font-medium">
                {food.Name}
                <p className="text-gray w-72 font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur. Cursus mi vulputate id
                  commodo vestibulum ut tellus sed.
                </p>
              </div>
              <div className="  font-medium text-primary">${food.Price}</div>
            </div>
          ))}
          {menu.slice(4, 8).map((food, index) => (
            <div className="flex items-start" key={index}>
              <img src={food.img} alt={food.Name} className="w-16 mr-4" />
              <div className="text-lg font-medium">
                {food.Name}
                <p className="text-gray w-72 font-light text-sm">
                  Lorem ipsum dolor sit amet consectetur. Cursus mi vulputate id
                  commodo vestibulum ut tellus sed.
                </p>
              </div>
              <div className="  font-medium text-primary">${food.Price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
