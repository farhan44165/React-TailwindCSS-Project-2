// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// import { motion } from 'framer-motion';
// import bg1 from "../assets/bg1.jpg";
// import bg2 from "../assets/bg2.jpg";
// import bg3 from "../assets/bg3.jpg";
// import bg4 from "../assets/bg4.jpg";
// import bg5 from "../assets/bg5.jpg";

// const Home2 = () => {
//   return (
//     <div className="relative w-full h-screen">
//       <Swiper
//         modules={[Pagination, Autoplay, Navigation]}
//         pagination={{ clickable: true }}
//         navigation
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="h-full"
//       >
//         <SwiperSlide>
//           <img src={bg1} className="w-full h-screen object-cover" alt="Slide 1" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg2} className="w-full h-screen object-cover" alt="Slide 2" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg3} className="w-full h-screen object-cover" alt="Slide 3" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg4} className="w-full h-screen object-cover" alt="Slide 3" />
//         </SwiperSlide>

//         <SwiperSlide>
//           <img src={bg5} className="w-full h-screen object-cover" alt="Slide 3" />
//         </SwiperSlide>
//       </Swiper>

//       <motion.div
//         className="absolute bottom-20 w-full text-center text-white z-10"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-2xl sm:text-4xl font-bold">Mr Farhan Technical</h1>
//         <p className="text-xs sm:text-sm mt-2">Please Like, Share & Subscribe</p>
//       </motion.div>
//     </div>
//   );
// };

// export default Home2;


// // import React from 'react'
// // import bg3 from "../assets/bg3.jpg";

// // const Home2 = () => {
// //   return (
// //     <div>
// //       <div>
// //         <img className='w-[100%]' src={bg3} alt="IMG" />
// //       </div>
// //     </div>
// //   )
// // }

// // export default Home2

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";

const Home2 = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Swiper Slides */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {[bg1, bg2, bg3, bg4, bg5].map((bg, i) => (
          <SwiperSlide key={i}>
            <img
              src={bg}
              className="w-full h-screen object-cover"
              alt={`Slide ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay Text */}
      <motion.div
        className="absolute bottom-16 w-full text-center text-white z-20 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Mr Farhan Technical
        </h1>
        <p className="text-sm sm:text-base mt-2 drop-shadow">
          Please Like, Share & Subscribe
        </p>
      </motion.div>
    </div>
  );
};

export default Home2;

