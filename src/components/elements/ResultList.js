import { useState } from "react";
import ResultItem from "./ResultItem";
import "../../assets/scss/ResultList.scss";

const ResultList = () => {
  let [result, setResult] = useState([
    {
      id: 1,
      name: "Adobe",
      url: "https://www.adobe.com",
      title: "Adobe: Creative, marketing and document management ...",
      description:
        "Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
      tags: [
        "adobe",
        "design",
        "creative",
        "designer",
        "photoshop",
        "illustrator",
      ],
    },
    {
      id: 2,
      name: "Adobe",
      url: "https://www.adobe.com",
      title: "Adobe: Creative, marketing and document management ...",
      description:
        "Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
      tags: [
        "adobe",
        "design",
        "creative",
        "designer",
        "photoshop",
        "illustrator",
      ],
    },
    {
      id: 3,
      name: "Adobe",
      url: "https://www.adobe.com",
      title: "Adobe: Creative, marketing and document management ...",
      description:
        "Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
      tags: [
        "adobe",
        "design",
        "creative",
        "designer",
        "photoshop",
        "illustrator",
      ],
    },
    {
      id: 4,
      name: "Adobe",
      url: "https://www.adobe.com",
      title: "Adobe: Creative, marketing and document management ...",
      description:
        "Adobe is changing the world through digital experiences. We help our customers create, deliver and optimize content and applications.",
      tags: [
        "adobe",
        "design",
        "creative",
        "designer",
        "photoshop",
        "illustrator",
      ],
    },
  ]);

  return (
    <>
      {result.map((result, index) => {
        return <ResultItem key={index} {...result} />;
      })}
    </>
  );
};

export default ResultList;
