import Post from "./models/Post";
import "./styles/styles";
import WebpackLogo from "./assets/webpack-logo.jpg";
import "./styles/less.less";
import "./styles/scss.scss";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div className="container">
      <h1>Webpack Course</h1>
      <hr />
      <div className="logo"></div>
      <hr />
      <pre></pre>
      <hr />
      <div className="box">
        <h2>Less</h2>
        <div className="card">
          <h2>Scss</h2>
        </div>
      </div>
      <img src="favicon.ico" style={{ width: "200px", height: "200px" }} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);

const post = new Post("Webpack Post Title", WebpackLogo);

// $("pre").addclassName("code").html(post.toString());

console.log("Post to String:", post.toString());

import("lodash").then((_) => {
  console.log("Lodash", _.random(0, 42, true));
});
