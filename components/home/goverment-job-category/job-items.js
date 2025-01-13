import Image from "next/image";
import Link from "next/link";

const CategoryBox = ({ name, path, image }) => {
  return (
    <Link
      href={path}
      className="governament-box border border-borderColor flex items-center justify-center flex-col hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative w-20 h-20 overflow-hidden bg-transparent flex items-center justify-center">
        {/* <Image
          width={100}
          height={100}
          className="object-contain transition-transform duration-300 hover:scale-110"
          src={image}
          alt={name}
        /> */}
      </div>

      <div className="w-full text-center py-3 border-t border-borderColor inline-block text-sm font-medium text-darkbule lg:text-[16px]">
        {name}
      </div>
    </Link>
  );
};

export default CategoryBox;
