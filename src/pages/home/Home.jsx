import React from "react";
import "./Home.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/trending";
import Popular from "./popular/Popular";
import Top_Rated from "./topRated/top_rated";

const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <Trending />
      <Popular />
      <Top_Rated />
    </div>
  );
};

export default Home;
