
//Class constructor to take in logo params
class DefShapes {
    constructor(shapes, colors, text, text_color) {
        this.shapes = shapes;
        this.colors = colors;
        // this.text_confirm = text_confirm;
        this.text = text;
        this.text_color = text_color;

    }
    setShapes(newShape) {
        this.shapes=newShape;
    };
    setColors(newColor) {
        this.colors=newColor;
    };
    setText(newText) {
         this.text=newText;
    };
    setText_color(newTextColor) {
        this.text_color=newTextColor;
    };
};

class Triangle extends DefShapes {
    constructor(shapes, colors, text, text_color) {
    super(shapes, colors, text, text_color);
   
    }
    render() {
        return `
        <svg version="1.1"
     width="500" height="210"
     xmlns="http://www.w3.org/2000/svg">

     <polygon points="200,10 380,210 30,210" fill="${this.colors}" />

  <text x="200" y="150" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>

</svg>
        `
    }
};
class Square extends DefShapes {
    constructor(shapes, colors, text, text_color) {
    super(shapes, colors, text, text_color);
   
    }
    render() {
        return `
        <svg version="1.1"
     width="500" height="210"
     xmlns="http://www.w3.org/2000/svg">

     <rect x="50" y="20" width="200" height="200" fill="${this.colors}" />

  <text x="150" y="130" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>

</svg>
        `
    }
};
class Circle extends DefShapes {
    constructor(shapes, colors, text, text_color) {
    super(shapes, colors, text, text_color);
   
    }
    render() {
        return `
        <svg version="1.1"
     width="500" height="300"
     xmlns="http://www.w3.org/2000/svg">

     <circle cx="200" cy="150" r="120" fill="${this.colors}" />

  <text x="199" y="171" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>

</svg>
        `
    }
}

module.exports={Triangle, Circle, Square}
