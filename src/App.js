import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import VideoDetails from "./Pages/VideoDetails";
import { VideoContextProvider } from "./context/video-context";

/*
  Route between 2 components depending on the path:
  1. Home page ("/")
  2. Video Details page ("/videoDetails")
              
  ** Home Page **
  •               
  ** Products Page **
  • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
          */
function App() {
  return (
    <VideoContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/videoDetails" element={<VideoDetails />} />
      </Routes>
    </VideoContextProvider>
  );
}

export default App;
