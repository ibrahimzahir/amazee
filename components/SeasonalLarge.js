import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity";

import { StarIcon } from "@heroicons/react/24/solid";

function SeasonalLarge({ title, image }) {
  const [isLoading, setLoading] = useState(true);
  return (
    <a href="" className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        {" "}
        <Image
          alt={title}
          src={urlFor(image).url()}
          width={1}
          height={1}
          layout="responsive"
          className={
            ("group-hover:opacity-75 duration-700 ease-in-out ",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100")
          }
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mt-4 text-sm font-medium text-gray-700">{title}</h3>
          <p className="mt-1 text-sm text-gray-700">{title}</p>
        </div>
        <div>
          <span className="flex gap-2">
            <StarIcon className="h-4 w-4" />
            <h1 className="text-sm text-gray-500">4.2</h1>
          </span>
        </div>
      </div>
    </a>
  );
}

export default SeasonalLarge;
