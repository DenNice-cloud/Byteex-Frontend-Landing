import { Swiper, SwiperSlide } from "swiper/react";
import { swipePhotos } from "./constants/swipePhotos";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";

const SwiperHeroSection = () => {
  return (
    <div className="w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          // modifier: 1.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
      >
        <div className="absolute lg:top-[100px] top-[20px] right-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>

        {swipePhotos.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex w-[150px] lg:w-[300px] border-4 border-white">
              <img
                className="
                          w-[150px] h-[200px]
                          lg:w-[300px] lg:h-[400px]
                          object-cover"
                src={src}
                alt={`Lucille Crewneck ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute lg:top-[100px] top-[20px] left-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>
      </Swiper>
    </div>
  );
};

export default SwiperHeroSection;
