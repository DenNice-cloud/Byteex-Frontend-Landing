import { reviewPhotos } from "./constants/reviewPhotos";

const AnimationPhotos = () => {
  return (
    <>
      <div className="flex animate-scroll-right-gallery mb-2">
        {reviewPhotos.concat(reviewPhotos).map((photo, index) => (
          <img
            key={`right-${index}`}
            src={photo}
            alt={`photo-${index}`}
            className="w-[120px] h-[120px] object-cover mr-2"
          />
        ))}
      </div>

      <div className="flex animate-scroll-left-gallery">
        {reviewPhotos
          .reverse()
          .concat(reviewPhotos)
          .map((photo, index) => (
            <img
              key={`left-${index}`}
              src={photo}
              alt={`photo-${index}`}
              className="w-[120px] h-[120px] object-cover mr-2"
            />
          ))}
      </div>
    </>
  );
};

export default AnimationPhotos;
