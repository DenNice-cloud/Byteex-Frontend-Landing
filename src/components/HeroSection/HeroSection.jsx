import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import { describerSection } from "./constants/describerSection";
import { swipePhotos } from "./constants/swipePhotos";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center px-[96px] py-[33px] mb-[120px]">
      <div className="mb-[60px]">
        <img
          className="h-[35px]"
          src="/images/LOGO.svg"
          alt="Byteex logo"
        />
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="w-[500px] mr-[100px]">
          <h2 className="text-[#01005B] font-sofiaRegular text-3xl mb-[25px]">
            Don't apologize for being comfortable.
          </h2>

          <div>
            {describerSection.map((value) => (
              <div
                key={value.alt}
                className="flex items-center mb-[23px]"
              >
                <div className="w-max-[31px] h-[31px] bg-[#F9F0E5] rounded-full p-2">
                  <img
                    className="w-full h-full"
                    src={value.icon}
                    alt={`${value.alt} icon`}
                  />
                </div>

                <p className="text-[#676869] ml-2">{value.text}</p>
              </div>
            ))}
          </div>

          <button className="relative flex items-center rounded px-[70px] py-[16px] bg-[#01005B]">
            <p className="text-white text-xl">Customize Your Outfit</p>

            <img
              className="absolute right-8 bottom-2"
              src="/icons/Arrow.svg"
              alt="arrow"
            />
          </button>
        </div>

        <div className=" h-full" >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
          >
            <div className="absolute top-[100px] right-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>

            {swipePhotos.map((src, index) => (
              <SwiperSlide
                key={index}
              >
                <div className=" flex w-[300px]">
                  <img
                    className="w-[300px] h-[400px] object-cover"
                    src={src}
                    alt={`Lucille Crewneck ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}

            <div className="absolute top-[100px] left-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
