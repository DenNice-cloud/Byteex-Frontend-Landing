import { MainButton } from "@/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AnimationPhotos from "./AnimationPhotos";
import ReviewMessage from "@/ui/ReviewMessage";
import { userReview } from "./constants/userReview";

const Reviews = () => {
  return (
    <div className="flex flex-col jusify-center items-center">
      <div className="relative w-full overflow-hidden">
        <AnimationPhotos />
      </div>

      <div className="px-[60px] py-[60px] max-w-full">
        <Swiper
          style={{
            "--swiper-navigation-color": "#676869",
            "--swiper-pagination-color": "#676869",
          }}
          grabCursor={true}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          className="px-[50px]"
        >
          {userReview.map((user) => (
            <SwiperSlide
              key={user.name}
              className="h-[300px]"
            >
              <ReviewMessage
                name={user.name}
                description={user.description}
              />
            </SwiperSlide>
          ))}
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
