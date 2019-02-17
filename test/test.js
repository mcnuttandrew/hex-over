const tape = require("tape");
const {computeOver} = require("../");

tape('Basic test', t => {
  t.equal(computeOver('#ff0000', '#000000', 0.004), '#01000');
  t.end();
});
