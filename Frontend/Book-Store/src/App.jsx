import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import MyFooter from "./Components/MyFooter/MyFooter";

const App = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
};

export default App;
