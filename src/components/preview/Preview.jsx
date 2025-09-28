import React, { useEffect, useState } from "react";
import "./Preview.css";
import storiesList from "../../data/stories.json";
import { IoMdClose } from "react-icons/io";
import { useApp } from "../../context/AppContext";

const Preview = () => {
  const { currentSlideIndex, setCurrentSlideIndex, closePreview } = useApp();
  const [progressKey, setProgressKey] = useState(0);

  const handleClick = (e) => {
    const preview = e.currentTarget;
    const clickX = e.clientX - preview.getBoundingClientRect().left;
    const width = preview.clientWidth;

    if (clickX < width / 2) {
      console.log("Clicked LEFT side");
      setCurrentSlideIndex((prev) =>
        prev === 0 ? storiesList.length - 1 : prev - 1
      );
    } else {
      console.log("Clicked RIGHT side");
      setCurrentSlideIndex((prev) =>
        prev === storiesList.length - 1 ? 0 : prev + 1
      );
    }
    setProgressKey((prev) => prev + 1);
  };

  const handleClosePreview = (e) => {
    e.stopPropagation();
    closePreview();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) =>
        prev === storiesList.length - 1 ? 0 : prev + 1
      );
      setProgressKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  return (
    <div id="preview" onClick={handleClick}>
      <div id="progress-bar" key={`progress-${progressKey}`}>
        <div className="progress-fill" />
      </div>
      <button onClick={handleClosePreview} id="close-preview">
        <IoMdClose />
      </button>
      <img key={`image-${progressKey}`} src={storiesList[currentSlideIndex].url} alt="" />
    </div>
  );
};

export default Preview;
