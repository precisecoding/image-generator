// classes created below, constructor color imports inputs from user to select color and add to constructor using render () {} in template literal. could also use message, shapeColor, textColor in constructor with render () {} template literal only for like:
// class Triangle {
//      constructor(shapeColor, message, textColor) {
//      this.shapeColor = shapeColor;
//      this.message = message;
//      this.textColor = textColor;
//     }
//      render () {
//      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
// <polygon points="100,10 40,198 190,78 10,78 160,198"
// style="fill:${this.shapeColor};"
// <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.message}</text>/></svg>`
// }
// }
// When using format above must use this."" to render paramaters in template literal and must define paramaters below constructor as this."" = "";
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> is the parent element from html structure. can use extends plus file to render additional paramaters onto html elements using template literal. Here child to the partent above as structured in html formating would be,  <polygon points="100,10 40,198 190,78 10,78 160,198"
// style="fill:${this.shapeColor};"/> etc...

class Triangle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render(message, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 40,198 190,78 10,78 160,198"
        style="fill:${this.shapeColor};"/>
        <text x="105" y="120" font-size="40" text-anchor="middle" fill="${textColor}">${message}</text></svg>`
    }
}
class Square {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render(message, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="100" style="fill:${this.shapeColor};"/>
        <text x="150" y="65" font-size="60" text-anchor="middle" fill="${textColor}">${message}</text></svg>`
       
    }
}
class Circle {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    render(message, textColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${message}</text></svg>`
    }
}

module.exports = { Triangle, Square, Circle };
// export format above is used for exporting multiple classes.
