import React from "react";
import ImageSlider from "../../components/Home/ImageSlider";
import Aemp from "../../components/Home/Aemp";
import Solution from "../../components/Home/Solution";
import Model from "../../components/Home/SF&L_Model";
import Clients from "../../components/Home/Clients";
import Connects from "../../components/Home/Connects"

const Home = () => {
  return (
    <>
    <div className="pt-20 font-custom overflow-hidden" >
      
        <div>
          <ImageSlider />
        </div>
        <div>
          <Aemp />
        </div>
        <div>
          <Solution />
        </div>
        <div>
          <Model/>
        </div>
        <div>
          <Clients/>
        </div>
        <div>
          <Connects/>
        </div>
        </div>
      
    </>
  );
};

export default Home;