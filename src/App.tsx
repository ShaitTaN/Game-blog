import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import { useAppDispatch } from "./hooks/useAppDispatch";
import FavouritesPage from "./pages/favourites/FavouritesPage";
import HomePage from "./pages/home/HomePage";
import PostsPage from "./pages/posts/PostsPage";
import { useLazyGetPostsQuery } from "./store/posts/posts.api";

function App() {
  return (
    <div>
			<Header/>
      <Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/posts" element={<PostsPage/>}/>
				<Route path="/favourites" element={<FavouritesPage/>}/>
			</Routes>
    </div>
  );
}

export default App;
