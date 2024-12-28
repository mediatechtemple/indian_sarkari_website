// CategoryList.js

import CategoryBox from "./job-items";

const CategoryList = () => {
  const categories = [
    { name: "Govt. jobs", image: "images/Govt-Jobs.webp", path: "/govt-jobs" },
    {
      name: "Railway jobs",
      image: "images/Railway_Jobs.webp",
      path: "/railway-jobs",
    },
    { name: "Bank jobs", image: "images/Bank_Jobs.webp", path: "/bank-jobs" },
    {
      name: "Defence jobs",
      image: "images/Defence_Jobs.webp",
      path: "/defence-jobs",
    },
    {
      name: "Postal jobs",
      image: "images/Postal_Jobs.webp",
      path: "/postal-jobs",
    },
    {
      name: "Judicial jobs",
      image: "images/Judicial_Jobs.webp",
      path: "/judicial-jobs",
    },
    {
      name: "Teaching jobs",
      image: "images/Teaching_Faculty.webp",
      path: "/teaching-jobs",
    },
    {
      name: "Engineering",
      image: "images/Engineering_Jobs.webp",
      path: "/engineering-jobs",
    },
    {
      name: "Clerical jobs",
      image: "images/Clerical_Jobs.webp",
      path: "/clerical-jobs",
    },
    {
      name: "Medical Jobs",
      image: "images/Medical_Biotech.webp",
      path: "/medical-jobs",
    },
  ];

  return (
    <div className="p-1">
      <div className="border border-borderColor shadow-custom mt-6 w-full p-3 pb-4">
        <h4 className="text-center text-[18px] font-medium text-darkbule lg:text-2xl 2xl:text-2xl lg:mt-3 2xl:mt-3 xl:text-2xl xl:mt-2">
          Government Jobs By Top Categories
        </h4>
        <div className="government-box-main grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4 mt-5 lg:mt-8 lg:mb-4 xl:mt-8 xl:mb-4 2xl:mt-8 2xl:mb-4">
          {categories.map((category, index) => (
            <CategoryBox
              key={index}
              name={category.name}
              image={category.image}
              path={`/all-job?category=${category.path}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
