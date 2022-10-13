import Head from "next/head";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import FreshProds from "../components/FreshProds";
import PopToday from "../components/PromoShops";
import PopShops from "../components/PopShops";
import { sanityClient, urlFor } from "../sanity";
import Seasonal from "../components/Seasonal";

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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {freshProds?.map((freshProd) => (
              <FreshProds
                key={freshProd._id}
                title={freshProd.title}
                image={freshProd.mainImage}
              />
            ))}
          </div>
        </section>
        <section className="px-6 py-10">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-3xl">Seasonal</h1>
            <Link href="/seasonal">
              <a className="text-base cursor-pointer pr-4">See All</a>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {popProducts.map((popProduct) => (
              <Seasonal
                key={popProduct._id}
                image={popProduct.mainImage}
                title={popProduct.title}
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
  }[0..3]`;
  const freshProds = await sanityClient.fetch(fquery);
  return {
    props: {
      popProducts,
      freshProds,
    },
  };
};
