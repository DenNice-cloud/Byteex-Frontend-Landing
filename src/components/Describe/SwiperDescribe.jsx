import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { photos } from "./constants/photos";

const SwiperDescribe = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiperRef, setSwiperRef] = useState(0);

  const handleClickSwitch = (index) => {
    swiperRef.slideToLoop(index);
    setActiveSlide(index);
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#676869",
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="w-full"
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"
          >
            <img
              className="h-[600px] object-cover"
              src={photo}
              alt="photo"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-3 left-0 w-[500px] z-[1]">
        <Swiper
          slidesPerView={photos.length}
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          style={{ width: "250px" }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer"
              onClick={() => handleClickSwitch(index)}
            >
              <img
                className={`w-[32px] h-[32px] object-cover ${
                  activeSlide === index ? "border-4 border-white" : ""
                }`}
                src={photo}
                alt="mini-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-center mt-[13px] text-[#676869]">
        <p>White Robe</p>
      </div>
    </>
  );
};

export default SwiperDescribe;
