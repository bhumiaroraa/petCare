import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";
import { TypeAnimation } from "react-type-animation";
import "./Home.css";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <div className="img-div">
        <img
          src="https://res.cloudinary.com/duu15ts5c/image/upload/v1711149165/GouravProject/assests/pexels-svetozar-milashevich-1490908_zdanik.jpg"
          alt="dog-image"
          className="dog-img"
        />
      </div>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "We provide Dog grooming",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "We provide vetenary services",
          1000,
          "We provide dog walk services",
          1000,
          "We provide dog products",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </Layout>
  );
};

export default HomePage;
