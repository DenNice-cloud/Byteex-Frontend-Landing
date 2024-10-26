import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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
        {photos.map((photo) => (
          <SwiperSlide
            key={photo.keyName}
            className="flex items-center justify-center"
          >
            <img
              className="h-[30rem] object-cover"
              src={photo.image}
              alt="photo"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-3 left-0 w-[28rem] z-[1]">
        <Swiper
          slidesPerView={photos.length}
          modules={[Navigation]}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          style={{ width: "16rem" }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide
              key={photo.keyName}
              className="cursor-pointer"
              onClick={() => handleClickSwitch(index)}
            >
              <img
                className={`w-[2rem] h-[2rem] object-cover ${
                  activeSlide === index ? "border-4 border-white" : ""
                }`}
                src={photo.image}
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
