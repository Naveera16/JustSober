import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProductCarousel = () => {
  const products = [
    { img: "img/product-img/product-1.jpg", price: "$39.90", title: "Jeans midi cocktail dress" },
    { img: "img/product-img/product-2.jpg", price: "$39.90", title: "Jeans midi cocktail dress" },
    { img: "img/product-img/product-3.jpg", price: "$39.90", title: "Jeans midi cocktail dress" },
    { img: "img/product-img/product-4.jpg", price: "$39.90", title: "Jeans midi cocktail dress" },
    { img: "img/product-img/product-5.jpg", price: "$39.90", title: "Jeans midi cocktail dress" },
  ];

  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500 }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="single_gallery_item">
              <div className="product-img">
                <img src={item.img} alt="" />
                <div className="product-quicview">
                  <a href="#"><i className="ti-plus"></i></a>
                </div>
              </div>
              <div className="product-description">
                <h4 className="product-price">{item.price}</h4>
                <p>{item.title}</p>
                <a href="#" className="add-to-cart-btn">ADD TO CART</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
