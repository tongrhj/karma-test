/* global describe it expect assert*/

// Here, I am importing a named function with object destructuring
import { alwaysTrue, isEven, countLetters } from '../src'

// alternative: export default function () | import myFunction from '../src'

describe('Testing Dev Ops Setup', () => {
  it('exposes the Chai expect method', () => {
    expect(1).to.not.equal(2)
  })

  it('works with ES6 import export', () => {
    expect(alwaysTrue()).to.be.true
  })
})

// Sample Test
describe('Testing the isEven function', () => {
  it('exists', () => {
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

  it('fails when a string is passed', () => {
    try {
      isEven('abc')
      expect(isEven).to.throw(Error)
      assert.fail()
    } catch (error) {
      expect(error.message === 'Must be a number')
    }
  })
})

describe('Testing the countLetters function', () => {
  it('returns a number when a string is passed', () => {
    expect(countLetters('abc')).to.equal(3)
  })

  it('fails when a non-string is passed', () => {
    try {
      countLetters(null)
      expect(isEven).to.throw(Error)
      assert.fail()
    } catch (error) {
      expect(error.message === 'Must be a string')
    }
  })
})
