// import React from 'react'

// const OurServices2 = () => {
//     return (
//         <div>
//             <div className='bg-white h-[150vh]'>
//                 <div className='bg-slate-900 py-10 pt-24'>
//                     <div className='text-4xl flex justify-center text-white py-5'>
//                         <h1 className='text-blue-600 tracking-wider'>BEST SERVICES</h1>
//                     </div>

//                     <div className='flex justify-center gap-5 pt-5'>
//                         {/* 1st Div-Column */}
//                         <div className='text-center w-[25%] hover:-translate-y-2 transition duration-300'>
//                             <div className='bg-slate-300 border-b-2 border-slate-400 py-5'>
//                                 <h2 className='font-serif text-3xl font-semibold'>BASIC</h2>
//                             </div>
//                             <div className='border-b-2 border-slate-400 bg-slate-100 text-slate-600 py-5'>
//                                 <p>$ <span className='text-4xl'>20</span> / month</p>
//                                 <ul className='leading-relaxed tracking-wider'>
//                                     <li>Responsive Website</li>
//                                     <li>Free Name</li>
//                                     <li>Mobile Friendly</li>
//                                     <li>Webmail Free</li>
//                                     <li>Customer Support</li>
//                                 </ul>
//                             </div>
//                             <div className='bg-slate-300 py-5'>
//                                 <button className='text-white bg-green-600 rounded px-4 py-1 hover:bg-green-800 transition duration-300'>Purchase</button>
//                             </div>
//                         </div>
//                         {/* 2nd Div-Column */}
//                         <div className='text-center w-[25%] hover:-translate-y-2 transition duration-300'>
//                             <div className='bg-slate-300 border-b-2 border-slate-400 py-5'>
//                                 <h2 className='font-serif text-3xl font-semibold text-yellow-500'>STANDARD</h2>
//                             </div>
//                             <div className='border-b-2 border-slate-400 bg-slate-100 text-slate-600 py-5'>
//                                 <p>$ <span className='text-4xl text-yellow-500'>20</span> / month</p>
//                                 <ul className='leading-relaxed tracking-wider'>
//                                     <li>Responsive Website</li>
//                                     <li>Free Name</li>
//                                     <li>Mobile Friendly</li>
//                                     <li>Webmail Free</li>
//                                     <li>Customer Support</li>
//                                 </ul>
//                             </div>
//                             <div className='bg-slate-300 py-5'>
//                                 <button className='text-white bg-green-600 rounded px-4 py-1 hover:bg-green-800 transition duration-300'>Purchase</button>
//                             </div>
//                         </div>
//                         {/* 3rd Div-Column */}
//                         <div className='text-center w-[25%] hover:-translate-y-2 transition duration-300'>
//                             <div className='bg-slate-300 border-b-2 border-slate-400 py-5'>
//                                 <h2 className='font-serif text-3xl font-semibold'>UNLIMITED</h2>
//                             </div>
//                             <div className='border-b-2 border-slate-400 bg-slate-100 text-slate-600 py-5'>
//                                 <p>$ <span className='text-4xl'>20</span> / month</p>
//                                 <ul className='leading-relaxed tracking-wider'>
//                                     <li>Responsive Website</li>
//                                     <li>Free Name</li>
//                                     <li>Mobile Friendly</li>
//                                     <li>Webmail Free</li>
//                                     <li>Customer Support</li>
//                                 </ul>
//                             </div>
//                             <div className='bg-slate-300 py-5'>
//                                 <button className='text-white bg-green-600 rounded px-4 py-1 hover:bg-green-800 transition duration-300'>Purchase</button>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurServices2


import React from 'react';

const OurServices2 = () => {
    return (
        <div className='w-full bg-slate-900 min-h-screen py-16'>
            {/* Section Heading */}
            <div className='text-3xl sm:text-4xl flex justify-center text-white'>
                <h1 className='text-blue-600 tracking-wider font-bold'>BEST SERVICES</h1>
            </div>

            {/* Service Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-24 mt-10'>
                
                {/* Card 1 */}
                <div className='text-center hover:-translate-y-2 transition duration-300 shadow-md rounded overflow-hidden'>
                    <div className='bg-slate-300 border-b-2 border-slate-400 py-5'>
                        <h2 className='font-serif text-2xl sm:text-3xl font-semibold'>BASIC</h2>
                    </div>
                    <div className='border-b-2 border-slate-400 bg-slate-100 text-slate-600 py-5 px-4'>
                        <p>$ <span className='text-3xl sm:text-4xl'>20</span> / month</p>
                        <ul className='leading-relaxed tracking-wider mt-4 space-y-1'>
                            <li>Responsive Website</li>
                            <li>Free Name</li>
                            <li>Mobile Friendly</li>
                            <li>Webmail Free</li>
                            <li>Customer Support</li>
                        </ul>
                    </div>
                    <div className='bg-slate-300 py-5'>
                        <button className='text-white bg-green-600 rounded px-4 py-2 hover:bg-green-800 transition duration-300'>Purchase</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='text-center hover:-translate-y-2 transition duration-300 shadow-md rounded overflow-hidden'>
                    <div className='bg-slate-300 border-b-2 border-slate-400 py-5'>
                        <h2 className='font-serif text-2xl sm:text-3xl font-semibold text-yellow-500'>STANDARD</h2>
                    </div>
                    <div className='border-b-2 border-slate-400 bg-slate-100 text-slate-600 py-5 px-4'>
                        <p>$ <span className='text-3xl sm:text-4xl text-yellow-500'>20</span> / month</p>
                        <ul className='leading-relaxed tracking-wider mt-4 space-y-1'>
                            <li>Responsive Website</li>
                            <li>Free Name</li>
                            <li>Mobile Friendly</li>
                            <li>Webmail Free</li>
                            <li>Customer Support</li>
                        </ul>
                    </div>
                    <div className='bg-slate-300 py-5'>
                        <button className='text-white bg-green-600 rounded px-4 py-2 hover:bg-green-800 transition duration-300'>Purchase</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='text-center hover:-translate-y-2 transition duration-300 shadow-md rounded overflow-hidden'>
                    <div className='bg-slate-300 border-b-2 border-slate-400 py-5'>
                        <h2 className='font-serif text-2xl sm:text-3xl font-semibold'>UNLIMITED</h2>
                    </div>
                    <div className='border-b-2 border-slate-400 bg-slate-100 text-slate-600 py-5 px-4'>
                        <p>$ <span className='text-3xl sm:text-4xl'>20</span> / month</p>
                        <ul className='leading-relaxed tracking-wider mt-4 space-y-1'>
                            <li>Responsive Website</li>
                            <li>Free Name</li>
                            <li>Mobile Friendly</li>
                            <li>Webmail Free</li>
                            <li>Customer Support</li>
                        </ul>
                    </div>
                    <div className='bg-slate-300 py-5'>
                        <button className='text-white bg-green-600 rounded px-4 py-2 hover:bg-green-800 transition duration-300'>Purchase</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurServices2;
