import React, { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const openPreview=(index)=>{
    setIsPreviewVisible(true)
    setCurrentSlideIndex(index);
  }

  const closePreview=()=>{
     setIsPreviewVisible(false)
    setCurrentSlideIndex(0);
  }

  return (
    <AppContext.Provider
      value={{
        currentSlideIndex,
        setCurrentSlideIndex,
        isPreviewVisible,
        openPreview,
        closePreview
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);