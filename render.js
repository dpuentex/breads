// This module loads a file by name from the views/ folder and renders it with react-dom/server

require("@babel/register")({
  presets: ["@babel/preset-react"],
});

const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const render = (viewName, props) => {
  const componentPath = path.join(__dirname, "views", viewName);
  const Component = require(componentPath);

  return ReactDOMServer.renderToString(React.createElement(Component, props));
};

module.exports = render;
