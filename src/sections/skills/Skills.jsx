import React from 'react';
import { FaHtml5, FaReact, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiExpress,SiCss3, SiFirebase, SiMongodb } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';

const Skills = () => {
    return (
        <div className='md:flex px-2 justify-center items-center'>
            <h2 className='text-4xl text-black'>Tech Stack</h2>
            <div className='flex gap-5 flex-wrap'>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><FaHtml5 className='text-4xl text-[#EE6C00]'></FaHtml5></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><SiCss3 className='text-4xl text-[#0083ee]'></SiCss3></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><SiTailwindcss className='text-4xl text-[#3490dc]'></SiTailwindcss></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><RiJavascriptFill className='text-4xl text-[#d5b100]'></RiJavascriptFill></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><FaReact className='text-4xl text-[#34b6dd]'></FaReact></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><SiFirebase className='text-4xl text-[#ddb533]'></SiFirebase></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><FaNode className='text-4xl text-[#1d9b38]'></FaNode></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><SiExpress className='text-4xl text-[#a3a3a3]'></SiExpress></span>
                    </div>
                </div>
                <div className="avatar placeholder">
                    <div className=" shadow-2xl text-neutral-content rounded-full w-16">
                        <span className="text-xl"><SiMongodb className='text-4xl text-[#1a7b28]'></SiMongodb></span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;