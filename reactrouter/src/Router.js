import React from 'react';
import { BrowserRouter as AppRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import ServiceDetails from './ServiceDetails';


const Router = () => {
    return (
        <AppRouter>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="About">About</NavLink>
                <NavLink to="Contact">Contact</NavLink>
                <NavLink to="Services">Services</NavLink>
            </nav>
            <hr />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route exact path="/Services" element={<Services/>} />
                <Route  path="/Service/:id" Component={<ServiceDetails/>} />
            </Routes>
        </AppRouter>
    );
}

export default Router;
