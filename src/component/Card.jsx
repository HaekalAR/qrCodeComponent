const Card = () => {
  return (
    <div className="h-screen w-full bg-r-lightgray p-4 flex items-center justify-center">
      <div className="flex flex-col md:w-[17.5em] w-[16em] h-fit p-4 bg-r-white rounded-xl gap-5 shadow-r-grayishblue/50 shadow-lg">
        <div>
          <img
            src="/image-qr-code.png"
            alt="QR-Code-img"
            className="rounded-lg"
          />
        </div>
        <div className="text-center px-2">
          <h3 className="font-[700] md:text-lg text-base pb-2 text-r-darkblue">
            Improve your front-end skills by building projects
          </h3>
          <p className="text-sm pb-4 text-r-grayishblue">
            Scan the qr code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
