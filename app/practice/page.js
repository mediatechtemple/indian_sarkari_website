import { getData } from "@/utils";
import React from "react";

const page = async () => {
  const data = await getData("/job");
  console.log(data);
  return <div>page</div>;
};

export default page;
