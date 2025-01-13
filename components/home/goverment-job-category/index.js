"use client";
import { useEffect, useState } from "react";
import CategoryBox from "./job-items";
import { getData } from "@/utils";

const CategoryList = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getData(`/category`);

        setCategory(response.rows);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="p-1">
      <div className="border border-borderColor shadow-custom mt-6 w-full p-3 pb-4">
        <h4 className="text-center text-[18px] font-medium text-darkbule lg:text-2xl 2xl:text-2xl lg:mt-3 2xl:mt-3 xl:text-2xl xl:mt-2">
          Government Jobs By Top Categories
        </h4>
        <div className="government-box-main grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-4 mt-5 lg:mt-8 lg:mb-4 xl:mt-8 xl:mb-4 2xl:mt-8 2xl:mb-4">
          {category.map((category) => (
            <CategoryBox
              key={category.id}
              name={category.name}
              // image={`https://newindiansarkari-production.up.railway.app/${category.categoryImg}`}
              //path={`/all-job?category=${category.name}&&id=${category.id}`}
              path={`/${category.name}/${category.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
