const { Triangle, Square, Circle } = require('./shapes');

describe('Circle', () => {
    it('Should generate a circle w/ the rest of user inputs', () => {
        const circle = new Circle('blue');
        expect(circle.render('abc', 'black')).toMatchSnapshot()
    })
    // .toMatchSnapshot() works for svg/html/README/etc... to generate output with values provided above rather than me typing it manually like in the miniproject examples.
})

describe('square', () => {
    it('Should generate a square w/ the rest of user inputs', () => {
        const square = new Square('purple');
        expect(square.render('def', 'red')).toMatchSnapshot()
    })
})

describe('triangle', () => {
    it('Should generate a triangle w/ the rest of user inputs', () => {
        const triangle = new Triangle('pink');
        expect(triangle.render('ghi', 'blue')).toMatchSnapshot()
    })
})
