// import React from 'react'

// const ContactUs2 = () => {
//     return (
//         <div>
//             <div className='bg-slate-900 py-7 pt-20'>
//                 <div className='text-4xl flex justify-center text-white py-5'>
//                     <h1>CONTACT US</h1>
//                 </div>

//                 <div className='flex justify-center'>
//                     <form action="#" method='post' className='flex flex-col italic font-serif'>
//                         <label className='pt-3 text-white'>User Name :</label>
//                         <input type="text" placeholder='User Name...' required className='placeholder:italic focus:outline-none py-1 placeholder:px-2 rounded'/>
//                         <label className='pt-3 text-white'>E-mail :</label>
//                         <input type="email" placeholder='E-mail...' required className='placeholder:italic focus:outline-none py-1 placeholder:px-2 rounded' />
//                         <label className='pt-3 text-white'>Message :</label>
//                         <textarea cols="50" rows="5" placeholder='Your Message...' required className='placeholder:italic focus:outline-none py-1 placeholder:px-2 rounded'></textarea>
//                         <div className='flex font-serif gap-2 py-3'>
//                             <input type="reset" value="RESET" className='text-white bg-blue-600 rounded w-20 py-1' />
//                             <input type="submit" value="SUBMIT" className='text-white bg-red-600 rounded w-20 py-1' />
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ContactUs2


import React from 'react';

const ContactUs2 = () => {
    return (
        <div className='bg-slate-900 min-h-screen w-full py-20'>
            {/* Heading */}
            <div className='text-3xl sm:text-4xl flex justify-center text-white py-5'>
                <h1 className='text-blue-500 tracking-wider font-bold'>CONTACT US</h1>
            </div>

            {/* Form Container */}
            <div className='flex justify-center px-4'>
                <form
                    action="#"
                    method="post"
                    className='flex flex-col italic font-serif bg-slate-800 p-6 sm:p-10 rounded-lg w-full max-w-md shadow-md'
                >
                    {/* Username */}
                    <label className='pt-3 text-white'>User Name:</label>
                    <input
                        type="text"
                        placeholder='User Name...'
                        required
                        className='placeholder:italic focus:outline-none py-2 px-3 rounded bg-white text-black'
                    />

                    {/* Email */}
                    <label className='pt-3 text-white'>E-mail:</label>
                    <input
                        type="email"
                        placeholder='E-mail...'
                        required
                        className='placeholder:italic focus:outline-none py-2 px-3 rounded bg-white text-black'
                    />

                    {/* Message */}
                    <label className='pt-3 text-white'>Message:</label>
                    <textarea
                        rows="5"
                        placeholder='Your Message...'
                        required
                        className='placeholder:italic focus:outline-none py-2 px-3 rounded bg-white text-black resize-none'
                    ></textarea>

                    {/* Buttons */}
                    <div className='flex gap-4 justify-end pt-5'>
                        <input
                            type="reset"
                            value="RESET"
                            className='text-white bg-blue-600 hover:bg-blue-800 transition rounded px-5 py-2 cursor-pointer'
                        />
                        <input
                            type="submit"
                            value="SUBMIT"
                            className='text-white bg-red-600 hover:bg-red-800 transition rounded px-5 py-2 cursor-pointer'
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs2;
