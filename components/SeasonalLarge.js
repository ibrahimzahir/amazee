import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../sanity";

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
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{title}</p>
    </a>
  );
}

export default SeasonalLarge;
