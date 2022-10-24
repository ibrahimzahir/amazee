import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity";

function Seasonal({ title, image }) {
  return (
    <>
      <div className="h-64 w-full relative bg-white rounded-md leading-normal  bg-cover cursor-pointer">
        <Image
          className="rounded-xl"
          src={urlFor(image).url()}
          layout="fill"
          objectFit="cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 rounded-xl bg-gradient-to-b from-transparent to-black"
        ></div>
        <div className="absolute inset-x-0 bottom-0 h-16 left-4 text-white">
          <p className="font-based">{title}</p>
          <p className="font-thin text-sm">{title}</p>
        </div>
      </div>
    </>
  );
}

export default Seasonal;
