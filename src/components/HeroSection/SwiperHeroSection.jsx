import { Swiper, SwiperSlide } from "swiper/react";
import { swipePhotos } from "./constants/swipePhotos";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";

const SwiperHeroSection = () => {
  return (
    <div>
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
          slideShadows: false,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
          reverseDirection: true,
        }}
        className="max-w-[45.3rem]"
        modules={[EffectCoverflow, Autoplay]}
      >
        <div className="absolute lg:top-[50px] top-[80px] right-0 w-[6.25rem] h-[150px]
        bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>

        {swipePhotos.map((src, index) => (
          <SwiperSlide
            key={src.keyName}
          >
            <img
              className="
                h-[20rem] w-[15.5rem]
                overflow-hidden
                object-cover
                border-4 border-white
              "
              src={src.src}
              alt={src.keyName}
            />
          </SwiperSlide>
        ))}

        <div className="absolute lg:top-[50px] top-[80px] left-0 w-[6.25rem] h-[150px]
        bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>
      </Swiper>
    </div>
  );
};

export default SwiperHeroSection;
