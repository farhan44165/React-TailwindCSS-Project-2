// import React from 'react'
// import bg3 from '../assets/bg3.jpg'
// import bg4 from '../assets/bg4.jpg'
// import bg5 from '../assets/bg5.jpg'
// import ot1 from '../assets/ot1.jpg'
// import ot2 from '../assets/ot2.jpg'
// import ot3 from '../assets/ot3.jpg'

// const Details2 = () => {
//     return (
//         <div>
//             <div className='bg-white'>
//                 <div className=' bg-slate-900 text-white pt-20 px-10'>
//                     <div className='flex gap-10 py-14'>
//                         <div className='w-[34%] px-2'>
//                             <h1 className='text-sky-400 text-4xl tracking-wider italic'>MR FARHAN</h1>
//                             <p className='text-sm py-3 leading-relaxed text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita hic, eos laboriosam quaerat esse repellendus quam? Ipsa officia labore, quas, vero debitis distinctio aliquam eos rerum ipsam doloribus impedit expedita a voluptates molestiae voluptatum illo. Sed minus Perspiciatis deleniti vel delectus.</p>
//                         </div>
//                         <div className='w-[33%] px-20 text-center'>
//                             <h1 className='text-sky-400 text-4xl italic'>CONTENT</h1>
//                             <ul className='pt-10 leading-relaxed'>
//                                 <li>Home</li>
//                                 <li>About Us</li>
//                                 <li>Services</li>
//                                 <li>Our Team</li>
//                                 <li>Contact Us</li>
//                                 <li>Details</li>
//                             </ul>
//                         </div>
//                         <div className='w-[33%] flex flex-col justify-center'>
//                             <div className='flex gap-1 py-1'>
//                                 <img className='h-24 w-24 border-2 border-white' src={bg3} alt="pic" />
//                                 <img className='h-24 w-24 border-2 border-white' src={bg4} alt="pic" />
//                                 <img className='h-24 w-24 border-2 border-white' src={bg5} alt="pic" />
//                             </div>
//                             <div className='flex items-center gap-1'>
//                                 <img className='h-24 w-24 border-2 border-white' src={ot1} alt="pic" />
//                                 <img className='h-24 w-24 border-2 border-white' src={ot2} alt="pic" />
//                                 <img className='h-24 w-24 border-2 border-white' src={ot3} alt="pic" />
//                             </div>
//                         </div>
//                     </div>
//                     <h2 className='flex justify-center italic font-serif tracking-wider py-3'>Copyright &copy; 2022 All Rights Reserved. Design By               <span className='text-sky-400 underline tracking-wider'>Mr Farhan</span></h2>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Details2


import React from 'react';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg5.jpg';
import ot1 from '../assets/ot1.jpg';
import ot2 from '../assets/ot2.jpg';
import ot3 from '../assets/ot3.jpg';

const Details2 = () => {
    return (
        <div className='w-full bg-slate-900 text-white pt-20 px-4 sm:px-10 min-h-screen'>
            <div className='flex flex-col lg:flex-row gap-10 py-14'>
                {/* Left Column */}
                <div className='lg:w-1/3 px-2'>
                    <h1 className='text-sky-400 text-4xl tracking-wider italic'>MR FARHAN</h1>
                    <p className='text-sm py-3 leading-relaxed text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam expedita hic, eos laboriosam
                        quaerat esse repellendus quam? Ipsa officia labore, quas, vero debitis distinctio aliquam eos
                        rerum ipsam doloribus impedit expedita a voluptates molestiae voluptatum illo. Sed minus
                        perspiciatis deleniti vel delectus.
                    </p>
                </div>

                {/* Middle Column */}
                <div className='lg:w-1/3 text-center px-2'>
                    <h1 className='text-sky-400 text-4xl italic'>CONTENT</h1>
                    <ul className='pt-10 leading-relaxed'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Our Team</li>
                        <li>Contact Us</li>
                        <li>Details</li>
                    </ul>
                </div>

                {/* Right Column - Images */}
                <div className='lg:w-1/3 flex flex-col justify-center px-2'>
                    <div className='flex gap-1 py-1 justify-center lg:justify-start'>
                        <img className='h-24 w-24 border-2 border-white object-cover' src={bg3} alt="pic" />
                        <img className='h-24 w-24 border-2 border-white object-cover' src={bg4} alt="pic" />
                        <img className='h-24 w-24 border-2 border-white object-cover' src={bg5} alt="pic" />
                    </div>
                    <div className='flex gap-1 justify-center lg:justify-start'>
                        <img className='h-24 w-24 border-2 border-white object-cover' src={ot1} alt="pic" />
                        <img className='h-24 w-24 border-2 border-white object-cover' src={ot2} alt="pic" />
                        <img className='h-24 w-24 border-2 border-white object-cover' src={ot3} alt="pic" />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <h2 className='flex justify-center italic font-serif tracking-wider py-3 text-sm text-center'>
                Copyright &copy; 2022 All Rights Reserved. Design By &nbsp;
                <span className='text-sky-400 underline tracking-wider'>Mr Farhan</span>
            </h2>
        </div>
    );
};

export default Details2;
