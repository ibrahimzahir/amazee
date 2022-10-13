import React from "react";
import Seasonal from "../components/Seasonal";
import { sanityClient } from "../sanity";

function seasonal({ seasonals }) {
  return (
    <div className="container m-auto px-12 sm:px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16">
        {seasonals?.map((seasonal) => (
          <Seasonal
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
  }[0..3]`;
  const seasonals = await sanityClient.fetch(query);
  return {
    props: {
      seasonals,
    },
  };
};
