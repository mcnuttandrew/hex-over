const tape = require("tape");
const hexOver = require('../').default;

tape('HexOver', t => {
  const pref1 = 'black background, red foregound';
  t.equal(hexOver('#ff0000', '#000000', 0.004), '#010000', `${pref1} should execute correctly with long hexes`);
  t.equal(hexOver('#f00', '#000000', 0.004), '#010000', `${pref1} should execute correctly with short foreground hex`);
  t.equal(hexOver('#f00', '#000', 0.004), '#010000', `${pref1} should execute correctly with short hexes`);

  const pref2 = 'black background, red foregound';
  t.equal(hexOver('#ff0000', '#ffffff', 0.004), '#fffefe', `${pref2} should execute correctly with long hexes`);
  t.equal(hexOver('#f00', '#ffffff', 0.004), '#fffefe', `${pref2} should execute correctly with short foreground hex`);
  t.equal(hexOver('#f00', '#fff', 0.004), '#fffefe', `${pref2} should execute correctly with short hexes`);
  t.end();
});
