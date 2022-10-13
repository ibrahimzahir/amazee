import Image from "next/image";
import Link from "next/link";

import { urlFor } from "../sanity";

function PopToday({ _id, title, image, description }) {
  return (
    <div className="relative rounded-xl group">
      <div
        className="items-center mb-2 mt-5 
    space-x-4 rounded-xl cursor-pointer"
      >
        <Image
          className="rounded-xl"
          objectFit="cover"
          src={urlFor(image).url()}
          width={550}
          height={350}
          layout="fixed"
        />

        <div className="absolute space-y-2 p-4 top-8">
          <h4 className="text-sm font-semibold text-white">{title}</h4>
          <p className="text-white text-xl">{title}</p>
        </div>
        <div className="absolute space-y-2 p-4 bottom-8">
          <Link href="/">
            <a className="text-sm text-black bg-white rounded-md px-4 py-2">
              {" "}
              Show more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PopToday;
