// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

/**
 * hexToRGB - convert a particular hex value into rgb
 * @param  {hexString} hexIn the value to convert
 * @return {Object of rgb channels} a object of the three extracted rgb channels
 */
function hexToRGB(hexIn) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const hex = hexIn.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return null;
  }
  return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  };
}

/**
 * toHexCoord - convert 255 int to hex int
 * @param  {int in [0, 255]} val value to convert
 * @return {string} hex representation of hex value
 */
function toHexCoord(val) {
  const hex = Number(val).toString(16);
  return hex.length < 2 ? `0${hex}`: hex;
}

/**
 * rgbToHex - convert rgb values to hex
 * @param  {int in [0, 255]} r the red channel of a color to convert to hex
 * @param  {int in [0, 255]} g the green channel of a color to convert to hex
 * @param  {int in [0, 255]} b the blue channel of a color to convert to hex
 * @return {hexString} the simulated over value
 */
const rgbToHex = (r, g, b) => `#${toHexCoord(r)}${toHexCoord(g)}${toHexCoord(b)}`;

/**
 * hexOver - the main hex over function, executes the over operator
 * @param  {hexString} color the foreground color
 * @param  {hexString} background the background color
 * @param  {number} alpha the opacity value associated with the foreground color
 * @return {hexString} the simulated over value
 */
export function hexOver(color, background, alpha) {
  const colorRGB = hexToRGB(color);
  const backgroundRGB = hexToRGB(background);
  const overRGB = ['r', 'g', 'b'].map(d => Math.round(colorRGB[d] * alpha + (1 - alpha) * backgroundRGB[d]));
  return rgbToHex(...overRGB);
}
export default hexOver;
