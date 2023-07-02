import React from 'react';
import {FaLinkedin,FaInstagram, FaGithub} from 'react-icons/fa'

const Footer = () => {
    return (
      
            <footer className="bg-inherits py-8">
                <div className=" px-4">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/4 text-center  mb-4 md:mb-0">
                            <h2 className="text-lg font-semibold text-black">Contact</h2>
                            <p className="text-black mt-2">Email: islamtanjim002@gamil.com</p>
                            <p className="text-black">Phone: +8801302193675</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 text-center mb-4 md:mb-0">
                            <h2 className="text-lg font-semibold text-black">Social</h2>
                            <div className="flex justify-center mt-2">
                                <a
                                    href="https://www.linkedin.com/in/tanjim-islam-645747278/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-white transition duration-300 ease-in-out mx-2"
                                >
                                   <FaLinkedin className='text-[#0072b1] text-3xl hover:text-white transition duration-300 ease-in-out'></FaLinkedin>
                                </a>
                                <a
                                    href="https://www.instagram.com/ptanjim01/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-white transition duration-300 ease-in-out mx-2"
                                >
                                    <FaInstagram className='text-[#E1306C] text-3xl hover:text-white transition duration-300 ease-in-out'></FaInstagram>
                                </a>
                                <a
                                    href="https://github.com/ptan01"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black hover:text-white transition duration-300 ease-in-out mx-2"
                                >
                                    <FaGithub className='text-3xl '></FaGithub>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 text-center mb-4 md:mb-0">
                            <h2 className="text-lg font-semibold text-black">Location</h2>
                            <p className="text-black mt-2">Nilphamari</p>
                            <p className="text-black">Bangladesh</p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 text-center">
                            <h2 className="text-lg font-semibold text-black">Newsletter</h2>
                            <p className="text-black mt-2">Subscribe to our newsletter for updates.</p>
                            <div className="mt-4">
                                <input
                                    type="email"
                                    className="py-2 px-4 w-full rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    placeholder="Enter your email"
                                />
                                <button className="btn btn-disabled" tabIndex="-1" role="button" aria-disabled="true">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-700" />
                    <div className="flex flex-wrap items-center justify-around">
                        <div className="w-full md:w-auto text-center md:text-left">
                            <p className="text-black">&copy; 2023 Tanjim Portfolio. All rights reserved.</p>
                        </div>
                        <div className="w-full md:w-auto text-center">
                            <a
                                href="#"
                                className="text-black hover:text-blue-500 transition duration-300 ease-in-out mx-2"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-black hover:text-blue-500 transition duration-300 ease-in-out mx-2"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
       
    );
};

export default Footer;