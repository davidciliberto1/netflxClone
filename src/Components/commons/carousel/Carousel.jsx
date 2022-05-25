import React, { useEffect } from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import useGetData from "../hooks/useGetData";
import { settingsSlider } from "./carouselConfig";

const Carousel = ({ entity, title }) => {
  const [values, loading, error] = useGetData(entity);
  return (
    <>
      <div>
        <h1
          style={{
            color: "white",
          }}
        >
          {title}
        </h1>
      </div>
      <Slider {...settingsSlider}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          values.map((value) => (
            <Card
              key={value.id}
              title={value.title || value.name}
              imgPath={value.backdrop_path}
            />
          ))
        )}
      </Slider>
    </>
  );
};

export default Carousel;
