// import React from 'react'
// import ot1 from "../assets/ot1.jpg";
// import ot2 from "../assets/ot2.jpg";
// import ot3 from "../assets/ot3.jpg";
// import { FaCamera } from "react-icons/fa6";
// import { FaClone } from "react-icons/fa";
// import { IoIosChatbubbles } from "react-icons/io";

// const OurTeam2 = () => {
//     return (
//         <div>
//             <div className='bg-slate-900 py-10 pt-20'>
//                 <div className='text-4xl flex justify-center text-white py-5'>
//                     <h1 className='text-blue-600 tracking-wider'>Our Team</h1>
//                 </div>

//                 {/* Main Div */}
//                 <div className='flex justify-around '>
//                     {/* 1st Div */}
//                     <div className='bg-slate-900 flex flex-col items-center leading-relaxed -ml-10'>
//                         <img className='border-4 border-white border-double w-40 h-40 rounded-full' src={ot1} alt="IMG" />
//                         <div className='flex flex-col text-white items-center'>
//                             <h1 className='font-semibold text-lg pt-3'>Elon Musk</h1>
//                             <h2 className='font-semibold tracking-wider text-sky-500'>CEO & Founder</h2>
//                             <h3 className='text-yellow-400'>Web Developer & Programmer</h3>
//                         </div>
//                         <div className='flex text-xl items-center gap-6 text-white pt-2'>
//                             <FaCamera />
//                             <FaClone />
//                             <IoIosChatbubbles />
//                         </div>
//                     </div>

//                     {/* 2nd Div */}
//                     <div className='bg-slate-900 flex flex-col items-center leading-relaxed'>
//                         <img className='border-4 border-white border-double w-40 h-40 rounded-full' src={ot2} alt="IMG" />
//                         <div className='flex flex-col text-white items-center'>
//                             <h1 className='font-semibold text-lg pt-3'>RAMZAY ALYA</h1>
//                             <h2 className='font-semibold tracking-wider text-sky-500'>VCEO & Planner</h2>
//                             <h3 className='text-yellow-400'>IT Expert</h3>
//                         </div>
//                         <div className='flex text-xl items-center gap-6 text-white pt-2'>
//                             <FaCamera />
//                             <FaClone />
//                             <IoIosChatbubbles />
//                         </div>
//                     </div>

//                     {/* 3rd Div */}
//                     <div className='bg-slate-900 flex flex-col items-center leading-relaxed'>
//                         <img className='border-4 border-white border-double w-40 h-40 rounded-full' src={ot3} alt="IMG" />
//                         <div className='flex flex-col text-white items-center'>
//                             <h1 className='font-semibold text-lg pt-3'>JANIFER OKLA</h1>
//                             <h2 className='font-semibold tracking-wider text-sky-500'>Managing Director</h2>
//                             <h3 className='text-yellow-400'>Web Designer</h3>
//                         </div>
//                         <div className='flex text-xl items-center gap-6 text-white pt-2'>
//                             <FaCamera />
//                             <FaClone />
//                             <IoIosChatbubbles />
//                         </div>
//                     </div>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default OurTeam2


import React from 'react'
import ot1 from "../assets/ot1.jpg";
import ot2 from "../assets/ot2.jpg";
import ot3 from "../assets/ot3.jpg";
import { FaCamera } from "react-icons/fa6";
import { FaClone } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";

const OurTeam2 = () => {
    return (
        <div className='bg-slate-900 py-20 min-h-screen w-full'>
            {/* Heading */}
            <div className='text-3xl sm:text-4xl flex justify-center text-white py-5'>
                <h1 className='text-blue-600 tracking-wider font-bold'>Our Team</h1>
            </div>

            {/* Team Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10 md:px-20 mt-10'>
                {/* Team Member Card */}
                {[{
                    name: "Elon Musk",
                    role: "CEO & Founder",
                    position: "Web Developer & Programmer",
                    img: ot1
                }, {
                    name: "RAMZAY ALYA",
                    role: "VCEO & Planner",
                    position: "IT Expert",
                    img: ot2
                }, {
                    name: "JANIFER OKLA",
                    role: "Managing Director",
                    position: "Web Designer",
                    img: ot3
                }].map((member, index) => (
                    <div
                        key={index}
                        className='bg-slate-900 flex flex-col items-center text-center leading-relaxed'
                    >
                        <img
                            className='border-4 border-white border-double w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover'
                            src={member.img}
                            alt={member.name}
                        />
                        <div className='text-white mt-4'>
                            <h1 className='font-semibold text-lg'>{member.name}</h1>
                            <h2 className='font-semibold tracking-wider text-sky-500'>{member.role}</h2>
                            <h3 className='text-yellow-400'>{member.position}</h3>
                        </div>
                        <div className='flex text-xl gap-5 text-white pt-3'>
                            <FaCamera />
                            <FaClone />
                            <IoIosChatbubbles />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam2;