import React from 'react';
import WellcomePage from '../sections/wellcomePage/WellcomePage';
import Navbar from '../sections/navbar/Navbar';
import About from '../sections/aboutMe/About';
import Skills from '../sections/skills/Skills';
import Projects from '../sections/projects/Projects';
import Contact from '../sections/contact/Contact';
import Footer from '../sections/footer/Footer';

const Home = () => {
    return (
        <div className=' bg-gradient-to-r from-[#D1E8FF] to-[#333333]'>
            <div className='max-w-7xl mx-auto '>
                <WellcomePage></WellcomePage>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
                <Navbar></Navbar>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;