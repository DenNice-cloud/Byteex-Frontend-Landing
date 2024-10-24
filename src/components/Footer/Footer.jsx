import { MainButton } from "@/ui/button";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Footer = () => {
  const forSwiper = [
    {
      image: "images/girl-yawning.png",
      alt: "yawning",
    },
    {
      image: "images/mock.png",
      alt: "Mock",
    },
    {
      image:
        "images/Lucille-crewneck-sweatshirt-blush-and ayla-sleep-jogger-sepia-rose-2 2.png",
      alt: "Lucille-crewneck",
    },
  ];

  const footerDescription = [
    {
      image: "icons/footer/truck.svg",
      description: "FREE Shipping on Orders over $200",
      alt: "truck",
    },
    {
      image: "icons/footer/protection.svg",
      description: "Over 500+ 5 Star Reviews Online",
      alt: "protection",
    },
    {
      image: "icons/footer/backet.svg",
      description: "Made ethically and responsibly.",
      alt: "backet",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center pt-[84px]">
      <div className="flex flex-col justify-center items-center text-center w-[600px] mb-10">
        <h1 className="text-[#01005B] text-[25px]">Find something you love.</h1>

        <p className="text-[#676869]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat.
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        className="relative mb-10 w-[550px]"
        modules={[EffectCoverflow]}
      >
        <div className="absolute top-[70px] right-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>

        {forSwiper.map((value) => (
          <SwiperSlide key={value.alt}>
            <div className="w-[200px] h-[300px] flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={value.image}
                alt={value.alt}
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute top-[70px] left-0 w-[100px] h-[150px] bg-gradient-to-b from-transparent to-[#F9F0E5B2]"></div>
      </Swiper>

      <div className="flex flex-col justify-center items-center pb-[83px] w-full h-full bg-gradient-to-b from-transparent to-[#F9F0E5B2]">
        <div className=" w-[380px] mb-7">
          <MainButton />

          <div className="flex h-[22px]">
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
        </div>

        <div className="flex justify-center items-center">
          {footerDescription.map((impact, index) => (
            <div
              key={index}
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

                <p className="text-[#676869] w-[200px]">{impact.description}</p>
              </div>

              {index < footerDescription.length - 1 && (
                <div className="border-r border-gray-300 h-full mx-5"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
