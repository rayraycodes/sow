import React from "react";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import ContentFeed from "../components/ContentFeed";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Sidebar />
      <ContentFeed />
    </div>
  );
};

export default HomePage;