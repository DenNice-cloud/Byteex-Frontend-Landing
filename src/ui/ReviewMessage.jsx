const ReviewMessage = ({ name, description }) => {
  return (
    <div className="px-[37px] py-[30px] bg-white rounded shadow-lg max-h-[300px]">
      <div className="flex">
        <div className="w-[40px] h-[40px] bg-[#1C2E58] mr-3 rounded-full"></div>

        <div>
          <img
            src="icons/stars.svg"
            alt="stars"
          />
          <h3 className="flex text-[#676869]">{name}</h3>
        </div>
      </div>

      <p className="text-[#676869] max-h-[200px] overflow-hidden text-ellipsis whitespace-pre-wrap">
        {description}
      </p>
    </div>
  );
};

export default ReviewMessage;
