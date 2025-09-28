import React from "react";
import "./Stories.css";
import storiesList from "../../data/stories.json";
import { useApp } from "../../context/AppContext";

const Story = ({ story,index }) => {
 
  const {openPreview}=useApp()  

  const handleStoryClick=()=>{
     openPreview(index)
 }

  return (
    <div className="story" onClick={handleStoryClick}>
      <div className="story-content">
        <img src={story.url} alt="" />
      </div>
    </div>
  );
};

const Stories = () => {
  return (
    <div id="stories-bar">
      {storiesList.map((story,index) => {
        return <Story key={story.id} index={index} story={story} />;
      })}
    </div>
  );
};

export default Stories;
