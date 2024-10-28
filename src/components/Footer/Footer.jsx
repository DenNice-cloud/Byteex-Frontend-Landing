import useWindowSize from "@/Hook/useWindowSize";
import { MainButton } from "@/ui/Button";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { photosSwiper } from "./constants/photosSwiper";
import { footerDescription } from "./constants/footerDescription";

const Footer = () => {
  const size = useWindowSize();
  const sizeTransition = 1024;
  const isDesktop = size.width >= sizeTransition;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center w-full lg:w-[600px] mb-10">
        <h1 className="text-[#01005B] text-[25px]">Find something you love.</h1>

        <p className="text-[#676869]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-full px-[30px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
          }}
          className="relative mb-10 w-full lg:w-[600px] "
          modules={[EffectCoverflow]}
        >
          <div className="absolute top-[70px] right-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>

          {photosSwiper.map((value) => (
            <SwiperSlide
              key={value.alt}
              className="flex justify-center items-center"
            >
              <img
                className="h-[16rem] w-[13.5rem] overflow-hidden object-cover"
                src={value.image}
                alt={value.alt}
              />
            </SwiperSlide>
          ))}

          <div className="absolute top-[70px] left-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>
        </Swiper>
      </div>

      <div className="flex flex-col justify-center items-center pb-[83px] w-full h-full bg-gradient-to-b from-transparent to-[#F9F0E5B2]">
        <div className="flex flex-col justify-center items-center w-full lg:w-[380px]">
          <div className="mb-2">
            <MainButton />
          </div>

          {isDesktop ? (
            <div className="flex h-[22px] mb-[20px]">
              <div className="flex items-center justify-between">
                <img
                  src="icons/clock.svg"
                  alt="clock"
                  className="mr-2"
                />

                <p className="text-[#1FAD40] mr-2 text-[10px]">
                  Ships in 1-2 Days
                </p>
              </div>

              <div className="mx-2 border-r border-gray-300 h-full"></div>

              <img
                src="images/cards.png"
                alt="cards"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <img
                className="mr-3"
                src="icons/stars.svg"
                alt="stars"
              />

              <p className="text-[#676869]">Over 500+ 5 Star Reviews Online</p>
            </div>
          )}
        </div>

        {isDesktop && (
          <div className="flex justify-center items-center ">
            {footerDescription.map((impact, index) => (
              <div
                key={impact.alt}
                className="flex h-[50px]"
              >
                <div className="flex justify-center items-center">
                  <div className="w-[33px] h-[33px] rounded-full bg-[#E4E4E4] mr-2">
                    <img
                      className="p-2 w-full h-full"
                      src={impact.image}
                      alt={impact.alt}
                    />
                  </div>

                  <p className="text-[#676869] w-[200px]">
                    {impact.description}
                  </p>
                </div>

                {index < footerDescription.length - 1 && (
                  <div className="border-r border-gray-300 h-full mx-5"></div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
