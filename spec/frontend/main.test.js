// require("../../public/js/main");
const fs = require("fs");
const path = require("path");
const js = fs.readFileSync(path.resolve(__dirname, '../../public/js/utils.js'), "utf8");

eval(js);

/*
test("front end code should be testable", () => {
  expect(sum(1,2)).toBe(3);
}); */

test("testing convertToCivTime", ()=>{
  expect(convertToCivTime(10)).toBe(10);
  expect(convertToCivTime(18)).toBe(6);
  expect(convertToCivTime(12)).toBe(12);
});

test("testing getResTime", ()=>{
  expect(getResTime("Fri Feb 21 2020 18:30:00 GMT-0500 (Eastern Standard Time)")).toBe("6:30");
  expect(getResTime("Wed Feb 19 2020 14:30:00 GMT-0500 (Eastern Standard Time)")).toBe("2:30");
  expect(getResTime("Tue Feb 21 2020 01:30:00 GMT-0500 (Eastern Standard Time)")).toBe("1:30");
});

test("testing changeReservationFormat", ()=>{
  expect(changeReservationFormat("2020-02-21T22:00:00.000Z")).toBe("Fri Feb 21 2020 17:00:00 GMT-0500 (Eastern Standard Time)");
})

test("testing convertToDoubleDigits", ()=>{
  expect(convertToDoubleDigits(3)).toBe("03");
  expect(convertToDoubleDigits(10)).toBe("10");
  expect(convertToDoubleDigits(0)).toBe("00");
});


test("testing reduceTimes", ()=>{
});
