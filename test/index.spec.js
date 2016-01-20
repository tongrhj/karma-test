/* global describe it expect*/

// Here, I am importing a named function with object destructuring
import { alwaysTrue, isEven } from '../src'

// alternative: export default function () | import myFunction from '../src'

describe('Testing Dev Ops Setup', () => {
  it('should expose the Chai expect method', () => {
    expect(1).to.not.equal(2)
  })

  it('should work with ES6 import export', () => {
    expect(alwaysTrue()).to.be.true
  })
})

// Sample Test
describe('Testing the isEven function', () => {
  it('should Exist', () => {
    expect(isEven(0)).to.be.true
  })

  it('checks that a number is even', () => {
    const evenNumber = Math.round(Math.random()) * 2
    expect(isEven(evenNumber)).to.be.true
  })

  it('checks that a number is odd', () => {
    const oddNumber = Math.round(Math.random()) * 2 + 1
    expect(isEven(oddNumber)).to.be.false
  })
})
