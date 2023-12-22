// ------------------LIB-------------------
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "textAlchemy.js",
    path: path.resolve(__dirname, "dist"),
  },
};
// -----------------MODULE-------------------
// const path = require("path");

// module.exports = {
//   experiments: {
//     outputModule: true,
//   },
//   entry: "./src/index.js",
//   output: {
//     filename: "textAlchemy.mjs",
//     path: path.resolve(__dirname, "dist"),
//     library: {
//       type: "module",
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//       },
//     ],
//   },
// };
