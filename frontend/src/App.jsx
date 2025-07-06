
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components from the 'src/component' directory
import Homepage from './Pages/Homepage.jsx'; // Corrected path
import Login from './Pages/Login.jsx';       // Corrected path
import Register from './Pages/Register.jsx';  // Corrected path
import About from './Pages/About.jsx'; // Corrected path
import Menu from './Pages/Menu.jsx';
import CustomCakes from './Pages/CustomCakes.jsx';
 import ContactUs from './Pages/ContactUs.jsx';
// import Cart from './component/Cart.jsx';
// import Order from './component/Order.jsx';

import './App.css'; // You can keep App.css for general styles or remove if not needed
import AdminDashboard from './Pages/AdminDashboard.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';




function App() {
  return (
    <Router>
      
      <div className="App">
        
          
  
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
           <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/custom-cakes" element={<CustomCakes />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />

          
         {/*} <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/order" element={<Order />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      
        
      </div>
    </Router>
      
  );
}

export default App;