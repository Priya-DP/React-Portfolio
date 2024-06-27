import React from "react";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import Topcontainer from "./components/Topcontainer/Topcontainer";
import Aboutcontainer from "./components/Aboutcontainer/Aboutcontainer";
import Projectcontainer from "./components/Projectcontainer/Projectcontainer";
import Contactcontainer from "./components/Contact/Contactcontainer/Contactcontainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Aboutcontainer />
      <Projectcontainer />
      <Contactcontainer />
      <Footer />
    </div>
  );
};

export default App;
