import Link from "next/link";

const CategoryBox = ({ name, image, path }) => {
  return (
    <div className="governament-box border border-border-color flex items-center justify-center flex-col">
      <Link href={path}>
        <img className="w-9 py-6" src={image} alt={name} />
      </Link>
      <Link
        className="w-full text-center py-3 border-t border-border-color inline-block text-sm font-medium text-darkbule lg:text-[16px]"
        href={path}
      >
        {name}
      </Link>
    </div>
  );
};

export default CategoryBox;
