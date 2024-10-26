import { MainButton } from "@/ui/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimationPhotos from "./AnimationPhotos";
import ReviewMessage from "@/ui/ReviewMessage";
import { userReview } from "./constants/userReview";
import useWindowSize from "@/hook/useWindowSize";

const Reviews = () => {
  const size = useWindowSize();
  const sizeTransition = 1024;
  const isDesktop = size.width >= sizeTransition;

  return (
    <div className="flex flex-col jusify-center items-center">
      <div className="relative w-full overflow-hidden">
        <AnimationPhotos />
      </div>

      <div
        className="max-w-full
          lg:px-[60px] lg:py-[60px] 
          px-[40px] py-[40px] 
        "
      >
        <Swiper
          style={{
            "--swiper-navigation-color": "#676869",
            "--swiper-pagination-color": "#676869",
          }}
          grabCursor={true}
          navigation={true}
          pagination={true}
          loop={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
          }}
          className="px-[50px]"
        >
          {userReview.map((user) => (
            <SwiperSlide
              key={user.keyName}
              className="
                lg:h-[300px] h-[260px]
              "
            >
              <ReviewMessage
                name={user.name}
                description={user.description}
              />
            </SwiperSlide>
          ))}

          {!isDesktop && (
            <div className="h-[30px] swiper-pagination-progressbar-opposite" />
          )}
        </Swiper>
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default Reviews;
