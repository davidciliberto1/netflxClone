import React from "react";
import { apiEntity } from "../../../../apiConfig";
import Navbar from "../../Navbar/Navbar";
import Carousel from "../../carousel/Carousel";
import Separator from "../../Separator/Separator";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Separator height={"40px"} />
      <Carousel
        entity={apiEntity.popularMovies}
        title={"Peliculas populares"}
      />
      <Separator height={"40px"} />
      <Carousel
        entity={apiEntity.topRatedMovies}
        title="Peliculas mejor puntuadas"
      />
      <Separator height={"40px"} />
      <Carousel entity={apiEntity.popularTv} title="Series populares" />
      <Separator height={"40px"} />
      <Carousel entity={apiEntity.topRatedTv} title="Series mejor puntuadas" />
    </>
  );
};

export default Homepage;
