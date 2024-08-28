import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="py-6 mx-10">
        <nav className="flex flex-row justify-between items-center">
          <div className="logo basis-2/6 text-center font-semibold text-xl cursor-pointer">
            CoffeeStyle
          </div>
          <ul className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 text-sm uppercase text-gray-500 font-medium">
            <li className="bao-top-menu-item">
              <a href="#" className="">
                Home
              </a>
            </li>
            <li className="bao-top-menu-item">
              <a href="#" className="">
                Product
              </a>
            </li>
            <li className="bao-top-menu-item">
              <a href="#" className="">
                Blog
              </a>
            </li>
            <li className="bao-top-menu-item">
              <a href="#" className="">
                About
              </a>
            </li>
            <li className="bao-top-menu-item">
              <a href="#" className="">
                Contact
              </a>
            </li>
            <li className="bao-top-menu-item">
              <a href="#" className="">
                Style guide
              </a>
            </li>
          </ul>
          {/* Phần Cart */}
          <ul className="lg:basis-1/6 basis-3/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
            <li>
              <a href="#" className="flex items-center">
                <FaShoppingCart />
                <span className="mx-2">Cart</span>
                <span className="bao-bage-circle bg-orange-400 text-white">
                  99+
                </span>
              </a>
            </li>
          </ul>
          <div className="lg:hidden basis-1/6 flex items-center cursor-pointer sm:px-4 px-2">
            <HiOutlineMenu
              size={"24px"}
              color="gray"
              onClick={handleMenuToggle}
            />
          </div>
        </nav>

        {/* Khi mà hình nhỏ hơn 1024 sẽ hiển thị nút để bấm và hiển thị ra menu */}
        <div
          className={`absolute  top-[7%] left-0 h-auto w-full bg-white flex flex-col items-center p-6 z-50 transform ${
            openMenu ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="w-full flex justify-end mb-4">
            <MdOutlineClose
              size={"24px"}
              color="#e9c46a"
              className="cursor-pointer"
              onClick={handleMenuToggle}
            />
          </div>
          <ul className="flex flex-col items-center text-gray-600 text-lg space-y-4">
            <li>
              <a href="#" className="hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Style guide
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
