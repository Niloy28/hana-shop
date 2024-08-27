// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

Object.defineProperty(global, "TextEncoder", {
  value: require("util").TextEncoder,
});

Object.defineProperty(global, "TextDecoder", {
  value: require("util").TextDecoder,
});
