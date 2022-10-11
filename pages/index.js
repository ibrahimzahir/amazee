import Head from "next/head";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import FreshShops from "../components/FreshShops";
import PopToday from "../components/PopToday";
import PopShops from "../components/PopShops";
import { sanityClient, urlFor } from "../sanity";

export default function Home({ popProducts, freshProds }) {
  return (
    <main>
      <section className="pl-8 md:pl-24 py-10">
        <h1 className="text-3xl py-6">Popular Today</h1>
        <div className="flex flex-nowrap space-x-4 overflow-x-auto scrollbar-hide">
          {popProducts?.map((product) => (
            <PopToday
              key={product._id}
              title={product.title}
              image={product.mainImage}
            />
          ))}
        </div>
      </section>

      <div className="container m-auto">
        <section className="px-6 py-5">
          <h1 className="text-3xl py-6">Fresh this Week</h1>
          <div className="">
            {freshProds?.map((freshProd) => (
              <FreshShops key={freshProd._id} title={freshProd.title} />
            ))}
          </div>
        </section>
        <section className="px-6 py-10">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-3xl">Popular</h1>
            <Link href="/shops">
              <a className="text-base cursor-pointer pr-4">See All</a>
            </Link>
          </div>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            <PopShops />
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

  const fquery = `*[_type == "product"]{
    _id, 
    title,
    slug,
    tags,
    vendor,
    categories,
    body,
    tags,
    mainImage
  }[0..4]`;
  const freshProds = await sanityClient.fetch(fquery);
  return {
    props: {
      popProducts,
      freshProds,
    },
  };
};