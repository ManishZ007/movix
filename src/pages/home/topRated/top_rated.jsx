import React, { useState } from "react";

import ContentWrapper from "../../../componets/contentWrapper/ContentWrapper";
import SwitchTab from "../../../componets/switchTabs/switchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../componets/carousel/Carousel";

const Top_Rated = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTab data={["Movies", "TVShows "]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
    </div>
  );
};

export default Top_Rated;
