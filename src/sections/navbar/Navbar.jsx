import React from 'react';
import { FiHome } from 'react-icons/fi';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import {BiMessageDetail} from 'react-icons/Bi'
import {AiOutlineFilePpt} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-center'>
            <nav className='fixed z-[999] flex items-center gap-5 bg-[#00acee] px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 bottom-10'>
                <a title='Home' href="#WellcomePage"><FiHome className='text-2xl text-black hover:text-[#D1E8FF]'></FiHome></a>
                <a title='About Me' href="#about"><BsFileEarmarkPerson className='text-2xl text-black hover:text-[#D1E8FF]'></BsFileEarmarkPerson></a>
                <a title='My Projects' href="#projects"><AiOutlineFilePpt className='text-2xl text-black hover:text-[#D1E8FF]'></AiOutlineFilePpt></a>
                <a title='Contact Me' href="#contact"><BiMessageDetail className='text-2xl text-black hover:text-[#D1E8FF]'></BiMessageDetail></a>

            </nav>
        </div>
    );
};

export default Navbar;