const tape = require("tape");
const {computeOver} = require("../");

tape('Basic test', t => {
  t.equal(computeOver('#ff0000', '#000000', 0.004), '#010000');
  t.equal(computeOver('#f00', '#000000', 0.004), '#010000');
  t.equal(computeOver('#f00', '#000', 0.004), '#010000');

  t.equal(computeOver('#ff0000', '#ffffff', 0.004), '#fffefe');
  t.equal(computeOver('#f00', '#ffffff', 0.004), '#fffefe');
  t.equal(computeOver('#f00', '#fff', 0.004), '#fffefe');
  t.end();
});
