import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (


    <div className="bg-header p-3 md:px-12 w-full fixed ">

      <div className="max-w-full max-auto flex justify-between items-center py-[9px]">

        <div className="md:text-3xl font-bold font-sans text-p text-lfont ">
          Ajay.Dev
        </div>



          
        <div className="md:hidden text-2xl  hover:text-hfonthover   hover:cursor-pointer">Dark</div>
         


        {toggle ? (
          <AiOutlineClose
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => {
              setToggle(!toggle);
            }}
            className="text-white text-2xl md:hidden block"
          />
        )}

       

        <ul className="hidden md:flex gap-10 text-hfont">
          <li className="text-2xl hover:text-hfonthover  hover:cursor-pointer">
            Home
          </li>
          <li className="text-2xl  hover:text-hfonthover   hover:cursor-pointer">
            About
          </li>
          <li className="text-2xl  hover:text-hfonthover   hover:cursor-pointer">
            Projects
          </li>
          <li className="text-2xl  hover:text-hfonthover   hover:cursor-pointer">
            Contact
          </li>
          <li className="text-2xl  hover:text-hfonthover   hover:cursor-pointer">
            Dark
          </li>
        </ul>
        {/* Responsive Menus */}

        

        <ul
          className={`duration-300 md:hidden w-full h-screen  bg-black fixed  top-[79px] text-white
           
              ${toggle ? "left-[0]" : "left-[-100%]"}  
        `}
        >
          <li className="p-5 text-center hover:text-hfonthover  hover:cursor-pointer hover:bg-hbg">
            Home
          </li>
          <li className="p-5 text-center hover:text-hfonthover hover:bg-hbg hover:cursor-pointer">
            About
          </li>
          <li className="p-5 text-center hover:text-hfonthover hover:bg-hbg hover:cursor-pointer">
            Projects
          </li>
          <li className="p-5 text-center hover:text-hfonthover hover:bg-hbg  hover:cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
