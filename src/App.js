import React from "react";
import Navbar from "./Screens/Header/Navbar";
import Footer from "./Screens/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/HomeScreen/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Event from "./components/Showcase/Showcase";
import Contact from "./components/Contact/Contact";
import Partner from "./components/Partner/Partner";
import FAQ from "./Screens/Footer/FAQ";
import AppDev from "./components/Services/CardData/AppDevelopment/App_Dev";
import Migration from "./components/Services/CardData/Migration&Upgrade/Migration";
import Implimentation from "./components/Services/CardData/Impli&Transformation/Implimentation";
import AppManagement from "./components/Services/CardData/AppMangment/AppManagement";
import SAP from "./components/Services/CardData/SAP_Analytics/SAP";
import ReverseAuction from "./components/Services/CardData/ReverseAuction/Reverse_Auction";
import Vendor from "./components/Services/CardData/Vendor/Vendor";
import ERP from "./components/Services/CardData/ERP/ERP";

function App() {
  return (
    <>
    <div className="font-custom">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/event" Component={Event} />
        <Route path="/contact" Component={Contact} />
        <Route path="/partner" Component={Partner}/>
        <Route path="/faq" Component={FAQ}/>
        <Route path="/app" Component={AppDev}/>
        <Route path="/migration" Component={Migration}/>
        <Route path="/implimentation" Component={Implimentation}/>
        <Route path="/appmang" Component={AppManagement}/>
        <Route path="/SAP" Component={SAP}/>
        <Route path="/ReverseAuction" Component={ReverseAuction}/>
        <Route path="/vendor" Component={Vendor}/>
        <Route path="/ERP" Component={ERP}/>
      </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
