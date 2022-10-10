import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import FreshShops from "../components/FreshShops";
import PromoShops from "../components/PromoShops";
import PopShops from "../components/PopShops";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  return (
    <main>
      <section className="pl-8 md:pl-24 py-10">
        <h1 className="text-3xl py-6">Promotions</h1>
        <div className="">
          <PromoShops />
        </div>
      </section>

      <div className="container m-auto">
        <section className="px-6 py-5">
          <h1 className="text-3xl py-6">Fresh this Week</h1>
          <div className="">
            <FreshShops />
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
