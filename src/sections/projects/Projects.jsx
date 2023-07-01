import React, { useEffect } from 'react';
import tuneCrift from '../../assets/tune-craft.web.app_haf_.png'
import tuneCrift2 from '../../assets/tune-craft.web.app_.png';
import speedyWheels from '../../assets/speedy-wheels-50772.web.app_haf_.png'
import speedyWheels2 from '../../assets/speedy-wheels-50772.web.app_.png'
import kitchenMaster from '../../assets/kithcen-master.web.app_haff.png'
import kitchenMaster2 from '../../assets/kithcen-master.web.app_.png'
import { BsBoxArrowUpRight, BsArrowUpRightSquareFill } from 'react-icons/bs'
import './Projects.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {


    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 200,
        })
    }, [])



    return (
        <div id='projects' className='py-10 px-2'>
            <h1 className='text-4xl text-black font-bold text-center my-10'>Projects</h1>
            <div className='md:flex justify-around'>
                <div data-aos="fade-up-right">
                    <div className="card w-full md:h-[450px] bg-[#333333] shadow-xl">
                        <figure className="px-2 pt-2">
                            <img src={tuneCrift} alt="Shoes" className="h-[300px] rounded-xl" />
                        </figure>
                        <div className="card-body p-2">
                            <h2 className="card-title text-3xl">Tune Craft</h2>
                            <p>Tune Craft is a Full Stack music instrument learning site</p>
                            <div className="flex flex-wrap justify-end">
                                <button className="px-5" onClick={() => window.my_modal_2.showModal()}><BsArrowUpRightSquareFill className='text-4xl text-[#333333]'></BsArrowUpRightSquareFill></button>
                            </div>
                        </div>
                    </div>
                    {/* Open the modal using ID.showModal() method */}

                    <dialog id="my_modal_2" className="modal">
                        <form method="dialog" className="modal-box bg-[#333333] max-w-3xl w-11/12">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg ">Tune craft</h3>
                            <div className='md:flex'>
                                <div className='md:w-1/2'>
                                    <div className='image-wrap'>
                                        <img src={tuneCrift2} alt="" />
                                    </div>
                                    <div className='space-x-2 py-2'>
                                        <a href="https://github.com/ptan01/Tune-craft-client" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                client<BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                        <a href="https://github.com/ptan01/Tune-craft-server" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                server<BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                        <a href="https://tune-craft.web.app/" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                live link <BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <ol style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                                        <li>Tune Craft is a Full Stack music instrument learning site , the website have admin, instructor
                                            and student Dashboard</li>
                                        <li>Student can select classes and upon successful payment, they will be enrolled in the chosen
                                            class</li>
                                        <li>And the admin can approve the instructor class or make a user to instructor or a admin</li>
                                    </ol>
                                    <p><span className='font-semibold'>Technologies</span>: React, React-router, Tailwind, DeasyUI, Firebase, Express js , Mongodb, Jwt , Vercel ,
                                        Tanstack query, Axios interceptors, Stripe payment</p>
                                </div>
                            </div>
                        </form>

                    </dialog>
                </div>
                {/* 2nd project */}
                <div data-aos="fade-up">
                    <div className="card w-full md:h-[450px] bg-[#333333] shadow-xl">
                        <figure className="px-2 pt-2">
                            <img src={speedyWheels} alt="Shoes" className="h-[300px] rounded-xl" />
                        </figure>
                        <div className="card-body p-2">
                            <h2 className="card-title text-3xl">Speedy Wheels</h2>
                            <p>Speedy Wheels is a Toys Market Place Website</p>
                            <div className="flex flex-wrap justify-end">
                                <button className="px-5" onClick={() => window.my_modal_3.showModal()}><BsArrowUpRightSquareFill className='text-4xl text-[#333333]'></BsArrowUpRightSquareFill></button>
                            </div>
                        </div>
                    </div>
                    {/* Open the modal using ID.showModal() method */}

                    <dialog id="my_modal_3" className="modal">
                        <form method="dialog" className="modal-box bg-[#333333] max-w-3xl w-11/12">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg ">Speedy Wheels</h3>
                            <div className='md:flex'>
                                <div className='md:w-1/2'>
                                    <div className='image-wrap'>
                                        <img src={speedyWheels2} alt="" />
                                    </div>
                                    <div className='space-x-2 py-2'>
                                        <a href="https://github.com/ptan01/speedy-wheels-client" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                client<BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                        <a href="https://github.com/ptan01/speedy-wheels-server" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                server<BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                        <a href="https://speedy-wheels-50772.web.app/" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                live link <BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <ol style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                                        <li>The website is like Admin related , A user can create account with there email password or
                                            Google account</li>
                                        <li>User Can add Toys in the toys page and see her toys on the my toys page and all toys page have
                                            all user added toys</li>
                                        <li>On the backend have some api lilke Post , Create , Get ,Update, and Delete using Express js with
                                            mongodb</li>
                                    </ol>
                                    <p><span className='font-semibold'>Technologies</span>: React, React-router, Tailwind, DeasyUI, React-icons, React-toastify , React-tab, Aos
                                        animation, Firebase, Express js, Mongodb, Vercel</p>
                                </div>
                            </div>
                        </form>

                    </dialog>
                </div>
                {/* 3rd project */}
                <div data-aos="fade-up-left">
                    <div className="card w-full md:h-[450px] bg-[#333333] shadow-xl">
                        <figure className="px-2 pt-2">
                            <img src={kitchenMaster} alt="Shoes" className="h-[300px] rounded-xl" />
                        </figure>
                        <div className="card-body p-2">
                            <h2 className="card-title text-3xl">Kitchen Master</h2>
                            <p>Kitchen Master is a chef and recipe related website</p>
                            <div className="flex flex-wrap justify-end">
                                <button className="px-5" onClick={() => window.my_modal_4.showModal()}><BsArrowUpRightSquareFill className='text-4xl text-[#333333]'></BsArrowUpRightSquareFill></button>
                            </div>
                        </div>
                    </div>
                    {/* Open the modal using ID.showModal() method */}

                    <dialog id="my_modal_4" className="modal">
                        <form method="dialog" className="modal-box bg-[#333333] max-w-3xl w-11/12">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg ">Kitchen Master</h3>
                            <div className='md:flex'>
                                <div className='md:w-1/2'>
                                    <div className='image-wrap'>
                                        <img src={kitchenMaster2} alt="" />
                                    </div>
                                    <div className='space-x-2 py-2'>
                                        <a href="https://github.com/ptan01/Tune-craft-client" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                client<BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                        <a href="https://github.com/ptan01/Tune-craft-server" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                server<BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                        <a href="https://tune-craft.web.app/" target='_blank'>
                                            <div className="btn btn-sm hover:bg-[#333333] bg-[#333333]">
                                                live link <BsBoxArrowUpRight></BsBoxArrowUpRight>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='md:w-1/2'>
                                    <ol style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                                        <li>The website create with react application and the website have some awesome react feature
                                            like user can view single recipe</li>
                                        <li>For the website authentication i used firebase . The website is deployed in firebase</li>
                                        <li>And the backend, i used express js with some fake data. see all details in README file</li>
                                    </ol>
                                    <p><span className='font-semibold'>Technologies</span>:: react, react-router, tailwind, deasyUI, react-icons, react-toastify, firebase, express</p>
                                </div>
                            </div>
                        </form>

                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Projects;