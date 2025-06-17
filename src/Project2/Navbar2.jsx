// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar2 = () => {
//     return (
//         <nav className='bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 md:flex items-center justify-between italic text-white px-8 py-5'>
//             <p className='text-lg font-bold tracking-widest'>FARHAN FAREED</p>
//             <div className='font-bold flex gap-x-5 '>
//                 <Link className='hover:underline hover:text-black' to="/">Home</Link>
//                 <Link className='hover:underline hover:text-black' to="/AboutUs2">About Us</Link>
//                 <Link className='hover:underline hover:text-black' to="/OurServices2">Services</Link>
//                 <Link className='hover:underline hover:text-black' to="/OurTeam2">Our Team</Link>
//                 <Link className='hover:underline hover:text-black' to="/ContactUs2">Contact Us</Link>
//                 <Link className='hover:underline hover:text-black' to="/Details2">Details</Link>
//             </div>
//         </nav>
//     )
// }

// export default Navbar2


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional: lucide-react for icons

const Navbar2 = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-indigo-900 via-blue-700 to-cyan-700 text-white px-8 py-5">
            <div className="flex items-center justify-between">
                <p className="text-lg font-bold tracking-widest italic">FARHAN FAREED</p>
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
                <div className="hidden md:flex gap-x-5 font-bold">
                    <Link className='hover:underline hover:text-black' to="/">Home</Link>
                    <Link className='hover:underline hover:text-black' to="/AboutUs2">About Us</Link>
                    <Link className='hover:underline hover:text-black' to="/OurServices2">Services</Link>
                    <Link className='hover:underline hover:text-black' to="/OurTeam2">Our Team</Link>
                    <Link className='hover:underline hover:text-black' to="/ContactUs2">Contact Us</Link>
                    <Link className='hover:underline hover:text-black' to="/Details2">Details</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col mt-4 space-y-2 md:hidden font-bold">
                    <Link className='hover:underline hover:text-black' to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className='hover:underline hover:text-black' to="/AboutUs2" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link className='hover:underline hover:text-black' to="/OurServices2" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link className='hover:underline hover:text-black' to="/OurTeam2" onClick={() => setMenuOpen(false)}>Our Team</Link>
                    <Link className='hover:underline hover:text-black' to="/ContactUs2" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    <Link className='hover:underline hover:text-black' to="/Details2" onClick={() => setMenuOpen(false)}>Details</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar2;
