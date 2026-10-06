const path = require("path");

module.exports = {
    mode: "development",

    entry: "./files/studentdetails.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "studentdetails.js"
    }
};