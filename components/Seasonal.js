import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "../sanity";

function Seasonal({ title, image }) {
  return (
    <div
      className="items-center mb-2 
            space-x-4 rounded-xl cursor-pointer
             hover:scale-105 
            transition transform duration-150 ease-out"
    >
      <Image
        className="rounded-xl"
        objectFit="cover"
        src={urlFor(image).url()}
        width={190}
        height={270}
        layout="fixed"
      />
      <p className="font-light">{title}</p>
    </div>
  );
}

export default Seasonal;
