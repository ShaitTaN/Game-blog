import React from "react";

const SidebarPost = () => {
  const bgImg = {
    backgroundImage:
      "url('https://genapilot.ru/wp-content/uploads/2021/12/too-angry-to-die-11-360x240.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div className="sidebar__post">
      <div className="sidebar__post-info">
        <div className="sidebar__post-img" style={bgImg} />
      <h3 className="title">The best games of 2020</h3>
      </div>
        <time dateTime="2020-04-01">1 September 2020</time>
    </div>
  );
};

export default SidebarPost;
