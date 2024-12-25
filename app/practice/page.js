// "use client";
// import { getData } from "@/utils";
// import React, { useEffect, useState } from "react";
// import parse from "html-react-parser";

// const Practice = () => {
//   const [queryData, setQueryData] = useState(null);
//   const [name, setName] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Ensure window is defined (only runs on the client side)
//     if (typeof window !== "undefined") {
//       const query = window.location.search;
//       const q = new URLSearchParams(query);
//       setName(q.get("id"));

//       (async () => {
//         const response = await getData(`/job/${q.get("id")}`);
//         console.log(response);
//         setData(response);
//       })();

//       setQueryData({
//         name: q.get("name"),
//         t: q.get("t"), // Get the value of the 't' query parameter
//       });
//       console.log("Query parameters:", q);
//     }
//   }, []);

//   return (
//     <div>
//       Practice Page:
//       {data?.content && typeof data.content === "string" ? (
//         <div>{parse(data.content)}</div>
//       ) : (
//         <p>No valid content available</p>
//       )}
//       <p>Name from query: {queryData?.name}</p>
//       <p>T from query: {queryData?.t}</p>
//     </div>
//   );
// };

// export default Practice;
"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getData } from "@/utils";

const PracticePage = () => {
  const [queryData, setQueryData] = useState(null);
  const [content, setContent] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const t = searchParams.get("t");

    if (id) {
      (async () => {
        try {
          const response = await getData(`/job/${id}`);
          const htmlContent =
            typeof response === "string" ? response : response?.content || "";

          const adjustedContent = htmlContent.replace(
            /width:\s?1024px/g,
            "width: 100%"
          );

          setContent(adjustedContent);
        } catch (error) {
          console.error("Error fetching job data:", error);
        }
      })();
    }

    setQueryData({ name, t });
  }, [searchParams]);

  return (
    <div className="w-full p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Practice Page</h1>
      <div className="overflow-hidden">
        {content ? (
          <div
            className="responsive-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <p>No valid content available</p>
        )}
      </div>
      {queryData && (
        <div className="mt-4">
          <p>
            <strong>Name from query:</strong> {queryData.name}
          </p>
          <p>
            <strong>T from query:</strong> {queryData.t}
          </p>
        </div>
      )}
    </div>
  );
};

export default PracticePage;
