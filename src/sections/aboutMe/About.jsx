import React, { useState } from 'react';
import img2 from '../../assets/121638789.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { AwesomeButton } from 'react-awesome-button';


const About = () => {

    const [counterOn, setCounterOn] = useState(false);




    return (
            <div id='about' className='py-10 px-2'>
                <h1 className='text-3xl text-black font-bold'>About Me</h1>
                <hr className='border-[#333333] my-5' />
                <div className='md:flex'>
                    <div className='md:w-1/2 px-2'>
                        <img className='rounded-lg' src={img2} alt="" />
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                            <div className='flex gap-5'>
                                <div>
                                    <h1 className='text-4xl text-black font-bold'>{counterOn && <CountUp delay={1} start={50} end={1} />}+</h1>
                                    <p className='text-black'>Years Experience</p>
                                </div>
                                <div>
                                    <h1 className='text-4xl text-black font-bold'>{counterOn && <CountUp delay={1} start={0} end={45} />}+</h1>
                                    <p className='text-black'>Completed Projects</p>
                                </div>
                            </div>
                        </ScrollTrigger>
                    </div>

                    <div className='md:w-1/2 text-justify px-2 text-gray-300'>
                        <h4 className='text-3xl font-semibold text-black'>I am <span className=''>Tanjim Islam</span></h4>
                        <p className='text-black'>from Nilphamari, Bangladesh, I am a passionate web developer who loves to create engaging and user-friendly websites. With over One years of experience in the field, I have developed a strong proficiency in HTML, CSS, JavaScript, and various front-end frameworks.</p>
                        <p className='text-black'>I have a strong foundation in front-end development, including expertise in HTML, CSS, CSS frameworks like Tailwind and Bootstrap, as well as JavaScript and the React framework. This breadth of knowledge allows me to handle various aspects of front-end development effectively.</p>
                        <p className='text-black'>My knowledge of back-end technologies like Node.js, Express.js, and MongoDB provides me with an added advantage. It showcases my ability to work with both front-end and back-end technologies, potentially making me a valuable asset in full-stack development scenarios.</p>
                        <p className='text-black'>During my career, I have had the opportunity to work on a wide range of projects, from building responsive websites for small businesses. I enjoy the challenge of problem-solving and finding innovative solutions to create seamless user experiences.</p>

                        <a href="#contact"><AwesomeButton>Contact Me</AwesomeButton></a>
                    </div>
                </div>
            </div>
    );
};

export default About;