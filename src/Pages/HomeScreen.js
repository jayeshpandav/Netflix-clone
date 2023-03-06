import React from "react";
import Banner from "../Components/Banner";
import Nav from "../Components/Nav";
import Row from "../Components/Row";
import requests from "../Requests";
import "./Styles/HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /
    </div>
  );
};

export default HomeScreen;
