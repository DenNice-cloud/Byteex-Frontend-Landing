const ReviewMessage = ({ name, description }) => {
  return (
    <div
      className="px-[37px] py-[30px] bg-white rounded shadow-lg 
    "
    >
      <div className="flex mb-2">
        <div className="w-[40px] h-[40px] bg-[#1C2E58] mr-3 rounded-full"></div>

        <div>
          <img
            src="icons/stars.svg"
            alt="stars"
            className="h-[8px] lg:h-[10px]"
          />

          <h3 className="flex text-[#676869]">{name}</h3>
        </div>
      </div>

      <p
        className="text-[#676869] overflow-hidden whitespace-pre-wrap
          text-xs lg:text-base lg:text-ellipsis 
        "
      >
        {description}
      </p>
    </div>
  );
};

export default ReviewMessage;
