import Link from "next/link";

const { RiArrowRightLine } = require("react-icons/ri");

const LatestJobButton = ({ title, href }) => {
  return (
    <div>
      <Link
        href={href}
        className="bg-darkbule shadow-custom2 p-4 font-medium text-white text-xs sm:text-sm lg:text-lg flex justify-between hover:bg-skyblue transform transition-transform duration-300 group"
      >
        <span>{title}</span>
        <RiArrowRightLine className="text-xs -rotate-45 sm:text-sm lg:text-lg transition-transform duration-300 group-hover:rotate-0" />
      </Link>
    </div>
  );
};
export default LatestJobButton;
