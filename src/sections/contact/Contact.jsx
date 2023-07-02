import React, { useRef } from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/110986-contact-us.json";
import emailjs from '@emailjs/browser';
import { AwesomeButton } from 'react-awesome-button';


const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r06y51g', 'template_75xg2up', form.current, 'Uaj79DehVpbLM8Vbz')
          .then((result) => {
              console.log(result.text);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
      
      };




    return (
        <div id='contact' className='py-10 px-2'>
            <h1 className='text-4xl text-[#333333] font-bold text-center'>Get in Touch</h1>
            <div className='md:flex items-center justify-around'>
                <div className='md:w-1/2'>
                    <Lottie animationData={groovyWalkAnimation} />
                </div>
                <div className='md:w-1/2'>
                    <form ref={form} onSubmit={sendEmail} className='space-y-5 ' action="">
                        <div>
                            <label className='font-semibold text-[#333333]' htmlFor="name">Name</label>
                            <br />
                            <input type="text" placeholder="Your Name" name='name' className="input border-b-2 text-[##D1E8FF] border-b-[#333333] border-0 bg-inherit w-full max-w-xl" />
                        </div>
                        <div>
                            <label className='font-semibold text-[#333333]' htmlFor="email">Email</label>
                            <br />
                            <input type="email" placeholder="Your Email" name='email' className="input border-b-2 text-[##D1E8FF] border-b-[#333333] border-0 bg-inherit w-full max-w-xl" />
                        </div>
                        <div>
                            <label className='font-semibold text-[#333333]' htmlFor="message"> Message</label>
                            <br />
                            <textarea className="input bg-inherit w-full max-w-xl h-[100px] border-b-2 border-0 border-b-[#333333]" name='message' placeholder="Your Message"></textarea>
                        </div>
                        <div>
                            <AwesomeButton><input type="submit" value="Send" /></AwesomeButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;