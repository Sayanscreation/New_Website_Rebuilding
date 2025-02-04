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
import About from "./components/About";
import Projectspage from "./components/projectspage";
import Projectdetails1 from "./components/Projectdetails1";
import ProjectDetails2 from "./components/ProjectDetails2";
import Jobdetails from "./components/Jobdetails";
import JobApplicationForm from "./components/JobApplicatonForm";
import Market from "./components/Market";


const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/home" element={
                    <>
                        <Banner />
                        <About />
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
                            <CareerPage />
                            <Footer />
                        </>
                    }
                />
                <Route
                    path="/Projects"
                    element={
                        <>
                            <Projectspage />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/Allprojects"
                    element={
                        <>
                            <Projectdetails1 />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/ProjectDetails"
                    element={
                        <>
                            <ProjectDetails2 />
                            <Footer />
                        </>
                    }
                />


                <Route
                    path="/JobDetails"
                    element={
                        <>
                            <Jobdetails />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/ApplicationForm"
                    element={
                        <>
                            <JobApplicationForm />
                            <Footer />
                        </>
                    }
                />

                <Route
                    path="/Market"
                    element={
                        <>
                            <Market />
                            <Footer />
                        </>
                    }
                />



            </Routes>
        </Router>
    );
};

export default App;
