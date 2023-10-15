import React, { useState } from "react";

import ContentWrapper from "../../../componets/contentWrapper/ContentWrapper";
import SwitchTab from "../../../componets/switchTabs/switchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../componets/carousel/Carousel";

const trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Tranding</span>
        <SwitchTab data={["Day", "Week "]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default trending;
