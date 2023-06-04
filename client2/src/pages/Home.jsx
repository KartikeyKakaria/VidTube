import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import {baseUrl} from '../utils/apiRoutes'
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      // const res = await fetch("/videos/random");
      // const data = await res.json()
      const res = await axios.get(`${baseUrl}videos/${type}`);
      console.log(res);
      setVideos(res.data);
    };
    fetchVideos();
  }, []);
  return (
    <Container>
      {videos.map((video) => {
        return <Card key={video._id} video={video} />;
      })}
    </Container>
  );
};

export default Home;
