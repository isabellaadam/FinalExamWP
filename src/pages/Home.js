import React from "react";
import Header from "../components/Header";
import Navigations from "../components/Navigations";
import Songs from "../components/Songs";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
            <Navigations />
            <Header />
            <Songs />
            <Footer />
        </>    
    );
}

export default Home;