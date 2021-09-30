import React from "react";
import ReactDOM from "react-dom";

const pi = 3.4;

function doublePi() {
  return pi * 2;
}
function triplePi() {
  return pi * 3;
}

export default pi;
export { doublePi, triplePi };
