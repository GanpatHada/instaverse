import React, { useEffect, useState, useRef } from "react";
import "./Preview.css";
import storiesList from "../../data/stories.json";
import { IoMdClose } from "react-icons/io";
import { useApp } from "../../context/AppContext";

const ProfileHeader = ({ story }) => (
  <header id="profile-header">
    <div>
      <section className="image-section">
        <img src={story.userImage} alt={story.fullName} />
      </section>
      <section className="info-section">
        <h4>{story.fullName}</h4>
        <p>{story.userName}</p>
      </section>
    </div>
  </header>
);

const Preview = () => {
  const { currentSlideIndex, setCurrentSlideIndex, closePreview } = useApp();
  const [progress, setProgress] = useState(0);
  const requestRef = useRef();
  const startTimeRef = useRef(null);

  const handleClick = (e) => {
    const preview = e.currentTarget;
    const clickX = e.clientX - preview.getBoundingClientRect().left;
    const width = preview.clientWidth;

    cancelAnimationFrame(requestRef.current);
    startTimeRef.current = null;
    setProgress(0);

    if (clickX < width / 2) {
      setCurrentSlideIndex((prev) =>
        prev === 0 ? storiesList.length - 1 : prev - 1
      );
    } else {
      setCurrentSlideIndex((prev) =>
        prev === storiesList.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handleClosePreview = (e) => {
    e.stopPropagation();
    closePreview();
  };

  const animateProgress = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const duration = 5000; // 5 seconds per story
    const newProgress = Math.min((elapsed / duration) * 100, 100);
    setProgress(newProgress);

    if (newProgress < 100) {
      requestRef.current = requestAnimationFrame(animateProgress);
    } else {
      // move to next story
      startTimeRef.current = null;
      setProgress(0);
      setCurrentSlideIndex((prev) =>
        prev === storiesList.length - 1 ? 0 : prev + 1
      );
    }
  };

  useEffect(() => {
    cancelAnimationFrame(requestRef.current);
    startTimeRef.current = null;
    setProgress(0);
    requestRef.current = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(requestRef.current);
  }, [currentSlideIndex]);

  return (
    <div id="preview" onClick={handleClick}>
      <button onClick={handleClosePreview} id="close-preview">
        <IoMdClose />
      </button>

      <div id="preview-content">
        <div id="progress-bar-wrapper">
          <div id="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <ProfileHeader story={storiesList[currentSlideIndex]} />

        <div className="image-wrapper">
          <img
          src={storiesList[currentSlideIndex].url}
          alt={storiesList[currentSlideIndex].title}
        />
        </div>
      </div>
    </div>
  );
};

export default Preview;
