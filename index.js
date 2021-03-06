function pad2(str) {
    return str.length == 1 ? '0' + str : str;
}

function tohex(rgb) {
    return '#' + pad2(rgb[0].toString(16)) + pad2(rgb[1].toString(16)) + pad2(rgb[2].toString(16));
}

function Gradient(colors) {
    // ensure constructor variables are valid
    if (colors.length == null || colors.length < 2) throw new Error('needs at least two colors to instantiate linear-gradient');
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        if (color.length == null || color.length !== 3) throw new Error('Error at element ' + i + '. Expected an RGB array such as [100, 100, 20], instead got ' + color);
        for (var j = 0; j < 3; j ++) {
            var c = color[j];
            if (c < 0 || c > 255) throw new Error('Error at element ' + i + '. Expected an RGB array such as [100, 100, 20], instead got ' + color);
        }
    }

    this.colors = colors;
}

Gradient.prototype.calcArray = function(value) {
    if (value < 0 || value > 1) throw new Error('The input value must be between 0 and 1');
    // offset represents where the value lies in the gradient
    var offset = value * (this.colors.length - 1);
    // whole is the whole number part, decimal is the remainder
    var whole = Math.floor(offset);
    var decimal = offset - whole;
    // if no remainder, simply return the lower color, otherwise calculate
    var lowerColor = this.colors[whole];
    if (decimal === 0.0) return lowerColor;
    var higherColor = this.colors[whole+1];
    var r = lowerColor[0] * (1 - decimal) + higherColor[0] * decimal;
    var g = lowerColor[1] * (1 - decimal) + higherColor[1] * decimal;
    var b = lowerColor[2] * (1 - decimal) + higherColor[2] * decimal;
    return [Math.round(r), Math.round(g), Math.round(b)];
}

Gradient.prototype.calcHex = function(value) {
    return tohex(this.calcArray(value));
}

module.exports = Gradient;