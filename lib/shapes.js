const { text } = require("stream/consumers");

//Class constructor to take in logo params
class DefShapes {
    constructor(shapes, colors, text) {
        this.shapes = shapes;
        this.colors = colors;
        // this.text_confirm = text_confirm;
        this.text = text;
    }
};
shapes() {
    return this.shapes;
};
colors() {
    return this.colors;
};
text() {
    return this.text;
};

class triangle extends DefShapes {
    constructor(shapes, colors, text) {
    super(shapes, colors, text);
    this.
    }
}