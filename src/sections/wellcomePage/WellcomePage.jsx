import React from 'react';
import img from '../../assets/rsz_img_1669996569610[1].jpg'
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { AwesomeButton, AwesomeButtonShare  } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
const WellcomePage = () => {
    return (
        <div id='WellcomePage' className='text-gray-300 py-10 px-2'>
            <div className='md:flex items-center justify-between'>
                <div className='space-y-5 md:w-1/2'>
                    <h1 className='text-4xl font-bold text-[black]'>Hi 👋 I'm Tanjim Islam, I am a <span className=''>
                        <Typewriter
                            words={['Frontend Developer', 'MERN Stack Developer', 'Web Developer']}
                            loop={true}
                            cursor
                            cursorStyle=''
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></span> </h1>
                    <p className='text-black'>I am a passionate Frontend Developer dedicated to creating impactful 1year experiences. <br /> With a keen eye for detail and a drive for innovation, I strive to bring ideas to life <br /> and deliver exceptional results.</p>
                    <a href="https://drive.google.com/file/d/12foyJoWrISWcLimwI-5BaY5_g9L1bf0e/view?usp=sharing" target='_blank'><AwesomeButton type='primary'>Download Resume</AwesomeButton></a>
                    <div>
                        <h2 className='text-2xl text-black font-semibold'>Find With Me</h2>
                        <div className="flex mt-2">
                            <a
                                href="https://www.linkedin.com/in/tanjim-islam-645747278/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-300 ease-in-out mx-2"
                            >
                                <FaLinkedin className='text-[#0072b1] text-3xl hover:text-white transition duration-300 ease-in-out'></FaLinkedin>
                            </a>
                            <a
                                href="https://www.instagram.com/ptanjim01/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-300 ease-in-out mx-2"
                            >
                                <FaInstagram className='text-[#E1306C] text-3xl hover:text-white transition duration-300 ease-in-out'></FaInstagram>
                            </a>
                            <a
                                href="https://github.com/ptan01"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition duration-300 ease-in-out mx-2"
                            >
                                 <FaGithub className='text-3xl hover:text-white transition duration-300 ease-in-out'></FaGithub>
                            </a>
                            {/* <AwesomeButtonShare type="github" href="https://github.com/username">GitHub</AwesomeButtonShare> */}
                        </div>
                    </div>
                </div>
                <div className="avatar md:w-1/2">
                    <div className="w-full mask mask-squircle">
                        <img src={img} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WellcomePage;