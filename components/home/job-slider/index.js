import Link from "next/link";

const JobSlider = () => {
  return (
    <div className="w-full">
      {/* Website Link */}
      <div className="w-full text-center mt-1">
        <Link
          href="#"
          className="text-xs inline-block  font-medium text-linkColor sm:text-sm md:text-base lg:text-[20px] lg:mt-4 xl:text-[20px] xl:mt-2 2xl:text-[20px] 2xl:mt-4"
        >
          www.sarkarinaukri.com
        </Link>
      </div>

      {/* Heading */}
      <div className="w-full text-center mt-1">
        <h5 className="text-[15px] font-semibold lg:text-[20px] lg:mt-3 2xl:text-[20px] text-darkbule">
          Welcome to No. 1 Education Portal Sarkari Naukri 2024
        </h5>
      </div>

      {/* Slider Section */}
      <div className="relative flex items-center overflow-hidden border-t border-b border-skyblue py-3 md:py-3 md:mt-3 xl:mt-8 mt-3 shadow-md">
        <div className="w-full whitespace-nowrap animate-marquee space-x-4 text-linkColor">
          <Link
            href="#"
            className="inline-block text-xs md:text-sm font-semibold text-linkColor"
          >
            PM Internship Online Form 2024
          </Link>
          <span className="text-xs md:text-sm text-linkColor font-semibold">
            |
          </span>
          <Link
            href="#"
            className="inline-block text-xs md:text-sm text-linkColor font-semibold"
          >
            PM Internship Online Form 2024
          </Link>
          <span className="text-xs md:text-sm text-linkColor font-semibold">
            |
          </span>
          <Link
            href="#"
            className="inline-block text-xs md:text-sm text-linkColor font-semibold"
          >
            PM Internship Online Form 2024
          </Link>
          <span className="text-xs md:text-sm text-linkColor font-semibold">
            |
          </span>
          <Link
            href="#"
            className="inline-block text-xs md:text-sm text-linkColor font-semibold"
          >
            PM Internship Online Form 2024
          </Link>
          <span className="text-xs md:text-sm text-linkColor font-semibold">
            |
          </span>
          <Link
            href="#"
            className="inline-block text-xs md:text-sm text-linkColor font-semibold"
          >
            PM Internship Online Form 2024
          </Link>
          <span className="text-xs md:text-sm text-linkColor font-semibold">
            |
          </span>
          <Link
            href="#"
            className="inline-block text-xs md:text-sm text-linkColor font-semibold"
          >
            PM Internship Online Form 2024
          </Link>
          <span className="text-xs md:text-sm text-linkColor font-semibold">
            |
          </span>
          <Link
            href="#"
            className="inline-block text-xs md:text-sm text-linkColor font-semibold"
          >
            PM Internship Online Form 2024
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobSlider;
