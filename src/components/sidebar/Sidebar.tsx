import { url } from "inspector";
import React, { FC } from "react";
import { IPost } from "../../models/IPost";
import Search from "../search/Search";
import "./sidebar.scss";
import SidebarPost from "./SidebarPost";

interface Props{
	posts: IPost[]
}

const Sidebar: FC<Props> = ({posts}) => {

  return (
    <div className="sidebar">
      <Search />
      <h2 className="title">Latest Posts</h2>
      <div className="sidebar__posts">
        {posts.map(post => <SidebarPost post={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default Sidebar;
