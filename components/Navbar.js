import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50  px-24 py-4 flex items-center justify-between border-b bg-white">
      <div className="hidden sm:flex ">
        <Link href="/">
          <a>
            <Image
              src="/images/shop.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={50}
              objectPosition="right"
              alt="logo"
            />
          </a>
        </Link>
      </div>
      <nav className="">
        <ul className="flex items-center font-semibold">
          <li className="relative group py-2 px-2">
            <button className="pl-5 text-red-400 text-sm cursor-pointer">
              Amazee
            </button>
          </li>
          <li className="relative group py-2 px-2">
            <button className="hover:opacity-50 cursor-default  text-gray-700 text-sm">
              Categories
            </button>
            <div className="absolute top-0 -left-20 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[350px] sm:min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Products
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Health & Beauty
                            <p className="text-gray-500 text-sm">
                              Cosmetics, Makeup
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Electronics
                            <p className="text-gray-500 text-sm">
                              Appliances, White Goods
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Toys & Hobbies
                            <p className="text-gray-500 text-sm">
                              Games, Sports
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Fashion
                            <p className="text-gray-500 text-sm">
                              Dresses, Jeans, Shoes
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Furniture
                            <p className="text-gray-500 text-sm">
                              Office, Home
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Services
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Events
                            <p className="text-gray-500 text-sm">
                              Party, Conference
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Resturents
                            <p className="text-gray-500 text-sm">
                              Food, Coffee, Tea
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Accommodation
                            <p className="text-gray-500 text-sm">
                              Renting, Day use
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Craft & Printing
                            <p className="text-gray-500 text-sm">
                              Books, handcraft
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Delivery & Logistic
                            <p className="text-gray-500 text-sm">
                              Transportation
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="relative group py-2 px-2">
            <button className="hover:opacity-50 cursor-default  text-gray-700 text-sm">
              Seasonal
            </button>
            <div className="absolute top-0 -left-20 sm:-left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[350px] sm:min-w-[560px] transform">
              <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Products
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Health & Beauty
                            <p className="text-gray-500 text-sm">
                              Cosmetics, Makeup
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Electronics
                            <p className="text-gray-500 text-sm">
                              Appliances, White Goods
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Toys & Hobbies
                            <p className="text-gray-500 text-sm">
                              Games, Sports
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Fashion
                            <p className="text-gray-500 text-sm">
                              Dresses, Jeans, Shoes
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Furniture
                            <p className="text-gray-500 text-sm">
                              Office, Home
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Services
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Events
                            <p className="text-gray-500 text-sm">
                              Party, Conference
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Resturents
                            <p className="text-gray-500 text-sm">
                              Food, Coffee, Tea
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Accommodation
                            <p className="text-gray-500 text-sm">
                              Renting, Day use
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Craft & Printing
                            <p className="text-gray-500 text-sm">
                              Books, handcraft
                            </p>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-tl hover:from-indigo-50 hover:to-pink-50 hover:via-red-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-red-600"
                          >
                            Delivery & Logistic
                            <p className="text-gray-500 text-sm">
                              Transportation
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <nav></nav>
    </header>
  );
}

export default Navbar;
