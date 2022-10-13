import Image from "next/image";
import Link from "next/link";

import { sanityClient, urlFor } from "../sanity";

function FreshProds({ title, image, category }) {
  return (
    <div className="relative rounded-xl group">
      <div className="w-full h-72 relative space-y-4">
        <Image
          src={urlFor(image).url()}
          alt="shops"
          loading="lazy"
          layout="fill"
          objectFit="cover"
          className="rounded-xl cursor-pointer"
        />

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 rounded-xl bg-gradient-to-b from-transparent to-black"
        ></div>
        <div className="absolute space-y-2 -mt-20 p-4 bottom-0">
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="text-white text-sm"> {category}</p>
        </div>
      </div>
    </div>
  );
}

export default FreshProds;
