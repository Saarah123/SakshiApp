import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { India } from "../components/Section/India";
import { MyNewsFeed } from "../components/Section/MyNewsFeed";
import { Business } from "../components/Section/Business";
import { Tech } from "../components/Section/Tech";
import { World } from "../components/Section/World";
import { Movies } from "../components/Section/Movies";
import { Ipl } from "../components/Section/Ipl";
import { Science } from "../components/Section/Science";
import { Happiness } from "../components/Section/Happiness";
import { Footer } from "../components/Footer/Footer";
import { LandingPage } from "../components/Home/LandingPage";
import { Signin } from "../components/User/Signin";
import { Register } from "../components/User/Register";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/myfeed" element={<MyNewsFeed />} />
        <Route exact path="/india" element={<India />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/tech" element={<Tech />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/ipl" element={<Ipl />} />
        <Route exact path="/science" element={<Science />} />
        <Route exact path="/happiness" element={<Happiness />} />
        <Route exact path="/signup" element={<Signin />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};
