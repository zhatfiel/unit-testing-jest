const { TestScheduler } = require("jest");

const cloneArray = require("./cloneArray")

test('properly clone array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})