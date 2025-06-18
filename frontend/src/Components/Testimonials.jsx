import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non.",
    name: "Michelle Williams",
    location: "Client, Los Angeles",
    img: "img/bg-img/tes-1.jpg",
  },
  {
    text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec in velit vel ipsum auctor pulvinar.",
    name: "John Doe",
    location: "Client, New York",
    img: "img/bg-img/tes-2.jpg",
  },
  {
    text: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.",
    name: "Emily Smith",
    location: "Client, Chicago",
    img: "img/bg-img/tes-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="karl-testimonials-area section_padding_100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_heading text-center">
              <h2>Testimonials</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              className="karl-testimonials-slides"
            >
              {testimonials.map((testi, index) => (
                <SwiperSlide key={index}>
                  <div className="single-testimonial-area text-center">
                    <span className="quote">"</span>
                    <h6>{testi.text}</h6>
                    <div className="testimonial-info d-flex align-items-center justify-content-center">
                      <div className="tes-thumbnail">
                        <img src={testi.img} alt={testi.name} />
                      </div>
                      <div className="testi-data">
                        <p>{testi.name}</p>
                        <span>{testi.location}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

