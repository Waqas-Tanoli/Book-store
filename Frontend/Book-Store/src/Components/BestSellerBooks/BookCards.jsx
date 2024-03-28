import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./cards.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const BookCards = ({ books, headline }) => {
  //console.log(books);
  return (
    <div className="my-16 px-4 lg:px-24 ">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="card"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/api/books/${book._id}`}>
                <div className="relative">
                  <img src={book.imageUrl} alt="" />

                  <div className="absolute  top-3 right-3 bg-blue-400 hover:bg-blue-700 p-2 rounded">
                    <FaCartShopping className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                  </div>
                  <div>
                    <p>$10</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default BookCards;