const StudyMetarailItem = ({ title, items, imagePath }) => (
  <div className="border border-borderColor p-2 text-center">
    <h2 className="text-base py-4 lg:text-lg bg-skyblue font-semibold mb-4 text-white">
      {title}
    </h2>
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <a
          key={index}
          className="flex text-sm shadow-sm items-center lg:text-base gap-4 p-2 hover:bg-skyblue text-darkbule font-medium hover:text-white transition:0.5s transition duration-500"
          href="#"
        >
          <img className="w-9" src={imagePath} alt="" />
          {item}
        </a>
      ))}
    </div>
    <div className="flex justify-end items-end mr-2 mt-5">
      <a className="text-base text-darkbule font-semibold lg:text-lg" href="#">
        View More
      </a>
    </div>
  </div>
);
export default StudyMetarailItem;
