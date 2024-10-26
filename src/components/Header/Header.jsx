import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import useWindowSize from "../../hook/useWindowSize";

const Header = () => {
  const size = useWindowSize();
  const sizeTransition = 1024;  
  const isDesktop = size.width >= sizeTransition;

  return (
    <div className="flex items-center justify-center bg-[#F9F0E5] font-suisse text-sm p-2">
      {!isDesktop ? (
        <Swiper
          slidesPerView={1}
          loop={true}
          className="w-full"
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <p className="flex justify-center items-center">
              CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p className="flex justify-center items-center">
              FREE SHIPPING on orders {">"} $200
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p className="flex justify-center items-center">
              Easy 45 day return window.
            </p>
          </SwiperSlide>
        </Swiper>
      ) : (
        <p>
          CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE
          SHIPPING on orders {">"} $200 | easy 45 day return window.
        </p>
      )}
    </div>
  );
};

export default Header;
