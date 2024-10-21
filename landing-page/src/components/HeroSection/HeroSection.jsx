const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center px-[96px] py-[33px]">
      <h1>Logo</h1>

      <div className="flex w-full items-center justify-between">
        <div>
          <h2>Don’t apologize for being comfortable.</h2>

          <div>
            <img
              src=""
              alt="icon"
            />
            <p>Beautiful, comfortable loungewear for day or night.</p>

            <img
              src=""
              alt="icon"
            />
            <p>No wasteful extras, like tags or plastic packaging.</p>

            <img
              src=""
              alt="icon"
            />
            <p>
              Our signature fabric is incredibly comfortable — unlike anything
              you’ve ever felt.
            </p>
          </div>

          <button>
            <p>Customize Your Outfit</p>
            <img
              src=""
              alt="arrow"
            />
          </button>
        </div>

        <div>Swiper</div>
      </div>
    </div>
  );
};

export default HeroSection;
