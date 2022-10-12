import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50  px-24 py-4 flex items-center justify-between border-b bg-white">
      <div className="hidden sm:flex ">
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
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
        <ul className="flex items-center font-semibold gap-8">
          <Link href="/" className="relative group py-2 px-2">
            <a className="pl-5 text-red-400 text-sm cursor-pointer font-light	bg-red-50 rounded-full px-4 py-2">
              Amazee
            </a>
          </Link>
          <li className="relative group py-2 px-2">
            <button className="cursor-pointer text-gray-700 text-sm">
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
                            <p className="text-gray-500 font-light text-sm">
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
                            <p className="text-gray-500 font-light text-sm">
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
                            <p className="text-gray-500 font-light	text-sm">
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
                            <p className="text-gray-500 font-light text-sm">
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
                            <p className="text-gray-500 font-light	text-sm">
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
                            <p className="text-gray-500 font-light	text-sm">
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
                            <p className="text-gray-500 font-light	text-sm">
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
                            <p className="text-gray-500 font-light	text-sm">
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
                            <p className="text-gray-500 font-light	text-sm">
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
                            <p className="text-gray-500 font-light	text-sm">
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
          <Link href="/seasonal" className="relative group py-2 px-4">
            <a className="cursor-pointer text-gray-700 text-sm">Seasonal</a>
          </Link>
        </ul>
      </nav>

      <div className="hidden sm:flex sm:w-96 py-2 items-center rounded-full border justify-between">
        <div className="">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full  mx-6 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding  focus:text-gray-700 focus:bg-white  focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
        <div className="">
          <MagnifyingGlassIcon
            className="md:inline-flex mx-2 h-8 bg-red-400 
        text-white rounded-full p-2"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
