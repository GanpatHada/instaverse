import "./Stories.css";
import storiesList from "../../data/stories.json";
import { useApp } from "../../context/AppContext";
import { useRef, useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Story = ({ story, index }) => {
  const { openPreview } = useApp();

  return (
    <div className="story" onClick={() => openPreview(index)}>
      <div className="story-content">
        <div className="story-image-wrapper">
          <img src={story.url} alt={story.title} />
        </div>
      </div>
      <p className="story-user-name">{story.userName}</p>
    </div>
  );
};

const Stories = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    updateButtons();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const scrollAmount = 100;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="stories-wrapper">
      {showLeft && (
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <BsChevronLeft size={16} />
        </button>
      )}

      <div id="stories-bar" ref={scrollRef}>
        {storiesList.map((story, index) => (
          <Story key={story.id} index={index} story={story} />
        ))}
      </div>

      {showRight && (
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <BsChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default Stories;
