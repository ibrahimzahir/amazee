import Head from "next/head";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import FreshProds from "../components/FreshProds";
import PopToday from "../components/PopToday";
import PopShops from "../components/PopShops";
import { sanityClient, urlFor } from "../sanity";
import SeasonalSmall from "../components/SeasonalSmall";
import CelebSmall from "../components/CelebSmall";

export default function Home({
  pCategories,
  popProducts,
  freshProds,
  sProducts,
  cProducts,
}) {
  return (
    <main>
      <section className="pl-8 md:pl-24 py-10">
        <h1 className="text-md font-semibold sm:text-3xl sm:font-normal py-6">
          Popular today
        </h1>
        <div className="flex flex-nowrap space-x-4 overflow-x-auto scrollbar-hide">
          {pCategories?.map((category) => (
            <PopToday
              key={category._id}
              title={category.title}
              image={category.mainImage}
              description={category.description}
            />
          ))}
        </div>
      </section>

      <div className="container m-auto">
        <section className="px-6 py-5">
          <h1 className="text-md font-semibold sm:text-3xl sm:font-normal py-6">
            Fresh this week
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {freshProds?.map((freshProd) => (
              <FreshProds
                key={freshProd._id}
                title={freshProd.title}
                category={freshProd.categories}
                image={freshProd.mainImage}
              />
            ))}
          </div>
        </section>
        <section className="px-6 py-10">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-md font-semibold sm:text-3xl sm:font-normal">
              Seasonal
            </h1>
            <Link href="/seasonal">
              <a className="text-sm sm:text-base cursor-pointer pr-4">
                See all
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
            {sProducts?.map((sProduct) => (
              <SeasonalSmall
                key={sProduct._id}
                image={sProduct.mainImage}
                title={sProduct.title}
              />
            ))}
          </div>
        </section>
        <section className="px-6 py-10">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-md font-semibold sm:text-3xl sm:font-normal">
              Celebrations
            </h1>
            <Link href="/seasonal">
              <a className="text-base cursor-pointer pr-4">See all</a>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
            {cProducts?.map((cProduct) => (
              <CelebSmall
                key={cProduct._id}
                image={cProduct.mainImage}
                title={cProduct.title}
              />
            ))}
          </div>
        </section>
        <section className="px-6 py-10">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-md font-semibold sm:text-3xl sm:font-normal">
              Greate for next trip
            </h1>
            <Link href="/seasonal">
              <a className="text-base cursor-pointer pr-4">See all</a>
            </Link>
          </div>

          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
            {sProducts?.map((sProduct) => (
              <SeasonalSmall
                key={sProduct._id}
                image={sProduct.mainImage}
                title={sProduct.title}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "product"]{
      _id, 
      title,
      slug,
      tags,
      vendor,
      categories,
      body,
      tags,
      mainImage
    }`;

  const popProducts = await sanityClient.fetch(query);

  const cquery = `*[_type == "category"]{
    _id, 
    title,
    slug,
    mainImage,
    description
  }`;

  const pCategories = await sanityClient.fetch(cquery);

  const fquery = `*[_type == "product"]{
    _id, 
    title,
    slug,
    tags,
    vendor,
    "categories": categories[]->title,
    body,
    tags,
    mainImage
  }[0..3]`;

  const freshProds = await sanityClient.fetch(fquery);

  const sQuery = `*[_type == "product" && "seasonal" in tags[]]{
    _id, 
      title,
      slug,
      tags,
      vendor,
      categories,
      body,
      tags,
      mainImage
    }[0..5]`;

  const sProducts = await sanityClient.fetch(sQuery);

  const cQuery = `*[_type == "product" && "celebration" in tags[]]{
    _id, 
      title,
      slug,
      tags,
      vendor,
      categories,
      body,
      tags,
      mainImage
    }[0..5]`;
  const cProducts = await sanityClient.fetch(cQuery);

  return {
    props: {
      popProducts,
      freshProds,
      pCategories,
      sProducts,
      cProducts,
    },
  };
};
