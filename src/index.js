// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

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

export function rgbToHexCoord(rgb) {
  const hex = Number(rgb).toString(16);
  return hex.length < 2 ? `0${hex}`: hex;
}

export function rgbToHex(r, g, b) {
  return `#${rgbToHexCoord(r)}${rgbToHexCoord(g)}${rgbToHexCoord(b)}`;
}

export function computeOver(color, background, alpha) {
  const colorRGB = hexToRGB(color);
  const backgroundRGB = hexToRGB(background);
  const overRGB = ['r', 'g', 'b'].map(d => Math.round(colorRGB[d] * alpha + (1 - alpha) * backgroundRGB[d]));
  return rgbToHex(...overRGB);
}
