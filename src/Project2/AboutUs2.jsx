// import React from 'react'
// import { RiComputerLine } from "react-icons/ri";
// import { FaTrophy } from "react-icons/fa6";
// import { BsPencilSquare } from "react-icons/bs";

// const AboutUs2 = () => {
//   return (
//     <div>
//       <div className='bg-slate-900 text-white py-12 mt-[3.5rem] mb-[3.5rem] '>
//         <div className='text-4xl flex justify-center py-5'>
//           <h1 className='text-blue-600 tracking-wider'>ABOUT US</h1>
//         </div>

//         {/* Main Div */}
//         <div className='grid sm:grid-cols-1 sm:h-auto md:grid-cols-2 lg:grid-cols-3 gap-20 px-20 items-center pt-16'>
//           <div className='flex flex-col items-center text-center'>
//             <RiComputerLine className='text-6xl' />
//             <h2 className='text-3xl font-semibold'>Easy To Use</h2>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, rem voluptatum! Nobis ratione qui provident.</p>
//           </div>

//           <div className='flex flex-col items-center text-center'>
//             <FaTrophy className='text-6xl' />
//             <h2 className='text-3xl font-semibold'>Awesom Design</h2>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, rem voluptatum! Nobis ratione qui provident.</p>
//           </div>

//           <div className='flex flex-col items-center text-center'>
//             <BsPencilSquare className='text-6xl' />
//             <h2 className='text-3xl font-semibold'>Easy To Customize</h2>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, rem voluptatum! Nobis ratione qui provident.</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default AboutUs2


import React from 'react'
import { RiComputerLine } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";

const AboutUs2 = () => {
  return (
    <div className='min-h-screen w-full bg-slate-900 text-white py-12'>
      {/* Heading */}
      <div className='text-3xl sm:text-4xl flex justify-center py-5'>
        <h1 className='text-blue-600 tracking-wider font-bold'>ABOUT US</h1>
      </div>

      {/* Features Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12 md:px-16 lg:px-20 items-center pt-10'>
        {/* Card 1 */}
        <div className='flex flex-col items-center text-center space-y-4'>
          <RiComputerLine className='text-5xl sm:text-6xl text-blue-400' />
          <h2 className='text-2xl sm:text-3xl font-semibold'>Easy To Use</h2>
          <p className='text-sm sm:text-base text-gray-300 px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ratione qui provident.</p>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col items-center text-center space-y-4'>
          <FaTrophy className='text-5xl sm:text-6xl text-yellow-400' />
          <h2 className='text-2xl sm:text-3xl font-semibold'>Awesome Design</h2>
          <p className='text-sm sm:text-base text-gray-300 px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ratione qui provident.</p>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col items-center text-center space-y-4'>
          <BsPencilSquare className='text-5xl sm:text-6xl text-green-400' />
          <h2 className='text-2xl sm:text-3xl font-semibold'>Easy To Customize</h2>
          <p className='text-sm sm:text-base text-gray-300 px-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ratione qui provident.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs2;
