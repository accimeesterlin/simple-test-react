import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const {
    add,
    multiply,
    divide,
    substract
} = require('../utils');


// Describe - BDD
describe('Main Parent', function() {
    // test, it
    it('should return total of the 2 parameters', () => {

        const result = add(2, 3); // 5
        const expectedValue = 5;

        // Assertion library
        expect(result).toEqual(expectedValue);
    });
});




it('should return the multiple of the 2 parameters', () => {

    const result = multiply(5, 4); // 20
    const expectedValue = 20;

    // Assertion library
    expect(result).toEqual(expectedValue);
});
