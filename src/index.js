
export function hexToRGB(hex) {
  const values = hex
    .replace(/rgba?\(/, '')
    .replace(/\)/, '')
    .replace(/[\s+]/g, '')
    .split(',');
  return {r: values[0], g: values[1], b: values[0]};
}


export function rgbToHexCoord(rgb) {
  const hex = Number(rgb).toString(16);
  return hex.length < 2 ? `0${hex}`: hex;
}

export function rgbToHex(r, g, b) {
  return `${rgbToHexCoord(r)}${rgbToHexCoord(g)}${rgbToHexCoord(b)}`;
}

export function computeOver(color, background, alpha) {
  const colorRGB = hexToRGB(color);
  const backgroundRGB = hexToRGB(background);
  const overRGB = ['r', 'g', 'b'].map(d => colorRGB[d] * alpha + (1 - alpha) * backgroundRGB[d]);
  return rgbToHex(...overRGB);
}
