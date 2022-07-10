import { url } from "inspector";
import React, { FC } from "react";
import Search from "../search/Search";
import "./sidebar.scss";
import SidebarPost from "./SidebarPost";

const Sidebar: FC = () => {

  return (
    <div className="sidebar">
      <Search />
      <h2 className="title">Latest Posts</h2>
      <div className="sidebar__posts">
        <SidebarPost/>
        <SidebarPost/>
        <SidebarPost/>
        <SidebarPost/>
        <SidebarPost/>
      </div>
    </div>
  );
};

export default Sidebar;
