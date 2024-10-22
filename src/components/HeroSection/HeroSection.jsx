import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { describerSection } from "./constants/describerSection";
import { swipePhotos } from "./constants/swipePhotos";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-[96px] py-[33px]">
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
                  <div className="w-[31px] h-[31px] bg-[#F9F0E5] rounded-full p-2 mr-[13px]">
                    <img
                      src={value.icon}
                      alt={`${value.alt} icon`}
                    />
                  </div>

                  <p className="text-[#676869]">{value.text}</p>
                </div>
              ))}
            </div>

            <button className="relative flex justify-between items-center rounded px-[70px] py-[16px] bg-[#01005B]">
              <p className="text-white text-xl">Customize Your Outfit</p>

              <img
                className="absolute right-8 bottom-2"
                src="/icons/Arrow.svg"
                alt="arrow"
              />
            </button>
          </div>

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
              modifier: 2.5,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
          >
            <div className="absolute top-[70px] right-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>

            {swipePhotos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="w-[200px] h-[300px] flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover"
                    src={src}
                    alt={`Lucille Crewneck ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}

            <div className="absolute top-[70px] left-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
