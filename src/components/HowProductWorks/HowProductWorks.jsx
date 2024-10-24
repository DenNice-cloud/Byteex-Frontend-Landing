import { productContant } from "./constants/productContant";
import { MainButton } from "@/ui/button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

const HowProductWorks = () => {
  return (
    <div className="flex flex-col items-center justify-between px-[200px] py-[83px]">
      <h1 className="mb-[46px] text-[#01005B] font-medium text-3xl">
        Comfort made easy
      </h1>

      <div className="flex justify-between w-full mb-[56px]">
        <Swiper
          style={{
            "--swiper-navigation-color": "#676869",
          }}
          slidesPerView={3}
          spaceBetween={50}
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          className="w-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          {productContant.map((product) => (
            <SwiperSlide
              style={{ backgroundColor: product.color }}
              className={` w-[346px] h-[321px] px-[35px] rounded-lg text-center 
            flex flex-col justify-center items-center`}
            >
              <img
                className="w-[50px] h-[50px] object-fit"
                src={product.icon}
                alt={product.alt}
              />

              <h2 className="text-[#01005B] mb-[19px] font-medium text-2xl">
                {product.title}
              </h2>

              <p className="text-[#676869]">{product.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mb-[11px]">
        <MainButton />
      </div>

      <div className="flex justify-center items-center mb-[74px]">
        <img
          className="mr-3"
          src="icons/stars.svg"
          alt="stars"
        />

        <p className="text-[#676869]">Over 500+ 5 Star Reviews Online</p>
      </div>

      <div className="mb-[10px] text-[#01005B] font-medium text-2xl">
        <h2>What are our fans saying?</h2>
      </div>

      <div className="w-[600px] text-center">
        <p className="text-[#676869]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
          felis finibus consequat. Fusce non nibh luctus.
        </p>
      </div>
    </div>
  );
};

export default HowProductWorks;
