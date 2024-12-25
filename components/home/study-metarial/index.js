import StudyMetarailItem from "./study-metarial-item";

const StudyMaterial = () => {
  const boxes = [
    {
      title: "Free Old Paper",
      items: ["SCC", "Banking", "Teaching"],
      imagePath: "images/ssc_All_1583571021.webp",
    },
    {
      title: "Mock Test",
      items: ["SCC", "Banking", "Teaching"],
      imagePath: "images/Test.png",
    },
    {
      title: "Free Books",
      items: ["SCC", "Banking", "Teaching"],
      imagePath: "images/Book.png",
    },
    {
      title: "Free Notes",
      items: ["SCC", "Banking", "Teaching"],
      imagePath: "images/Notepad.png",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 mt-10 p-2">
      {boxes.map((box, index) => (
        <StudyMetarailItem
          key={index}
          title={box.title}
          items={box.items}
          imagePath={box.imagePath}
        />
      ))}
    </div>
  );
};

export default StudyMaterial;
