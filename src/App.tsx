import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";

function App() {
  return (
    <div>
      <Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/posts" element={<PostsPage/>}/>
			</Routes>
    </div>
  );
}

export default App;
