import React, { useState } from "react";

import ContentWrapper from "../../../componets/contentWrapper/ContentWrapper";
import SwitchTab from "../../../componets/switchTabs/switchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../componets/carousel/Carousel";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");

  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTab data={["Movies", "TVShows "]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
    </div>
  );
};

export default Popular;
