import { useState } from "react";
import AccordianItem from "./AccordianItem";

const accordianData = [
  {
    title: "This is accordian page",
    AccData:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    title: "This is accordian page",
    AccData:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    title: "This is accordian page",
    AccData:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="w-[60%] m-auto mt-5">
      {accordianData.map((item, index) => {
        return (
          <AccordianItem
            key={index}
            title={item.title}
            body={item.AccData}
            isPageOpen={index === openIndex ? true : false}
            setIsPageOpen={() => {
                index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
