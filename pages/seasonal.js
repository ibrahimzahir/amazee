import React from "react";
import SeasonalLarge from "../components/SeasonalLarge";
import { sanityClient } from "../sanity";

function seasonal({ seasonals }) {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {seasonals?.map((seasonal) => (
          <SeasonalLarge
            key={seasonal._id}
            image={seasonal.mainImage}
            title={seasonal.title}
          />
        ))}
      </div>
    </div>
  );
}

export default seasonal;

export const getStaticProps = async () => {
  const query = `*[_type == "product" && "seasonal" in tags[]]{
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
  const seasonals = await sanityClient.fetch(query);
  return {
    props: {
      seasonals,
    },
  };
};
