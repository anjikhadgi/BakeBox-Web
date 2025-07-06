import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported
import homeImage from "../assets/Image/home.png";
 // Make sure the path is correct

import "./Homepage.css"; // Ensure CSS is imported in the same directory
// In src/Pages/Homepage.jsx
import Navbar from "../components/Navbar";// Adjusted import path for Navbar component
import Footer from "../components/Footer";
import About from "./About";
import Menu from "./Menu";
import CustomCakes from "./CustomCakes";
import ContactUs from "./ContactUs";



function Homepage() {
  return (
    <div className="homepage"> {/* Consistent with .homepage in CSS */}
    <Navbar/>

      {/* Main section class names now aligned with CSS: .main-section, .image-container, .content-container */}
      <main className="main-section">
        <div className="image-container">
         <img src={homeImage} alt="Delicious Cake" />
        </div>
        <div className="content-container">
          <h1 className="main-heading">Delicious cake for every occasion!</h1>
          <p className="welcome-text">
            <strong>
              Welcome to Bake Box, where each slice embodies sweetness and love!
            </strong>
            <br />
            Our specialty is creating cakes that add a unique touch to your celebrations.
          </p>
          <Link to="/order" className="order-btn"> {/* Use Link for Order Now */}
            Order Now
          </Link>
        </div>
      </main>
      <br></br><br></br>
     { /*<About/>
      <Menu/>
      <CustomCakes/>
      <ContactUs/>*/}
      <Footer/>
    </div>
  );
}

export default Homepage;