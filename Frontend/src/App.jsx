import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Services2 from "./components/Services2";
import Certifications from "./components/Certifications";
import PastPerformance from "./components/PastPerformance";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import ServicesPage from "./components/ServicesPage";
import CareerPage from "./components/Career";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/home" element={
                    <>
                        <Banner />
                        <Services2 />
                        <Certifications />
                        <PastPerformance />
                        <Footer />
                    </>
                } />
                <Route
                    path="/about-us"
                    element={
                        <>
                            <AboutUs />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/Services"
                    element={
                        <>
                            <ServicesPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/Career"
                    element={
                        <>
                            <CareerPage/>
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
