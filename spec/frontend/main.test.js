// require("../../public/js/main");
const fs = require("fs");
const path = require("path");
const js = fs.readFileSync(path.resolve(__dirname, '../../public/js/utils.js'), "utf8");

eval(js);


test("front end code should be testable", () => {
  expect(sum(1,2)).toBe(3);
});
