# 📱 Instaverse

A lightweight **Instagram-like story viewer** built for mobile devices, with smooth transitions and native behavior — **no external libraries used**.

## 🚀 Live Demo

👉 [View Live Demo](https://instaversedemo.netlify.app)

> ⚠️ **Note**: This project is optimized for **mobile only** and may not work properly on desktop screens.

---

## ✨ Features

- 📂 **JSON-based Story Source**: All image URLs are stored and fetched from a separate JSON file.
- 📜 **Horizontally Scrollable Story List**: A sleek, scrollable bar of story previews at the top.
- 👆 **Tap Navigation**:
  - Tap **left** to go to the **previous** story.
  - Tap **right** to go to the **next** story.
- ⏱️ **Automatic Story Advance**: Each story automatically progresses after **5 seconds**.
- ⚙️ **Custom Logic**: All core logic is built **from scratch**, no external libraries used.
- 💫 **Smooth Transitions**: Optional transitions added for a better visual experience.
- 🟢 **Deployed and Version Controlled**: Hosted online and code pushed to GitHub.
- 🎥 **Demo Video**: Recorded to showcase working features.

---

## 📁 File Structure Overview


<pre> 
<code>
│   App.css
│   App.jsx
│   index.css
│   main.jsx
│   
├───assets
│       react.svg
│       
├───components
│   ├───preview
│   │       Preview.css
│   │       Preview.jsx
│   │       
│   └───stories
│           Stories.css
│           Stories.jsx
│           
├───context
│       AppContext.jsx
│       
└───data
        stories.json
</code> 
</pre>


## 🛠️ Tech Stack

- **React (Vite)**
- **CSS (Vanilla)**
- **JavaScript (ES6+)**

---

## 📦 Setup

```bash
git clone https://github.com/GanpatHada/instaverse
cd instaverse
npm install
npm run dev



