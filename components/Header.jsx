import React from "react";
import headerStyles from "../styles/Header.module.css";

export const Header = () => {
  const num = 5;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDevelopment</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep yourself updates with the news
      </p>
      {/* conditional rendergin in nextJs */}
      {/* <style jsx>
        {`
          .title {
            color: ${num < 4 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};
