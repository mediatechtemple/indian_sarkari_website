import Link from "next/link";
import { RiCircleFill } from "react-icons/ri";

const JobLinkItem = ({ title, link, additionalClasses, jobUrl }) => {
  return (
    <div className="lg:pr-4 sm:pr-4 p-4">
      <div
        className={`relative p-6 text-white text-center rounded-tl-xl rounded-br-xl min-h-10 lg:text-lg text-xs lg:min-h-20 ${additionalClasses}`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="relative text-sm font-medium z-10 lg:text-xl lg:font-medium">
            {title}
          </p>
        </div>

        {/* Modified polygon with rectangle in the center and triangles on both sides */}
        {additionalClasses.includes("clip-polygon-middle") ? (
          <div
            className={`absolute inset-0 bg-skyblue transform ${
              additionalClasses.includes("polygon-flipped")
                ? "skew-x-[20deg] clip-polygon-triangle"
                : "skew-x-[-20deg] clip-polygon-triangle"
            }`}
          ></div>
        ) : (
          <>
            <div
              className={`absolute top-0 left-0 w-full h-2/4 transform ${
                additionalClasses.includes("polygon-flipped")
                  ? "skew-x-[20deg]"
                  : "skew-x-[-20deg]"
              } bg-skyblue`}
            ></div>
            <div
              className={` absolute bottom-0 left-0 w-full h-2/4 transform ${
                additionalClasses.includes("polygon-flipped")
                  ? "skew-x-[-20deg]"
                  : "skew-x-[20deg]"
              } bg-skyblue`}
            ></div>
          </>
        )}
      </div>

      <div className="p-2 border border-skyblue w-full ml-2">
        <ul className="space-y-3 text-xs lg:text-base">
          {jobUrl &&
            jobUrl.length > 0 &&
            jobUrl.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <RiCircleFill size={6} className="text-skyblue" />
                <Link
                  href={`/practice?slug=${item.slug}&&name=${item.jobUrl}&&id=${item.id}`}
                  target="_blank"
                  className="text-link-color  hover:underline"
                >
                  {item.jobUrl}
                </Link>
              </li>
            ))}
        </ul>
        <div className="flex justify-end mr-4 my-2">
          <a className="text-base text-darkbule font-semibold" href={link}>
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobLinkItem;
