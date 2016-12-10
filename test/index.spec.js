/* global describe it expect assert */
import sinon from 'sinon'
import { describe, it, before, after } from 'mocha'
import { assert, expect } from 'chai'

// Here, I am importing a named function with object destructuring
import {
  alwaysTrue,
  isEven,
  countLetters,
  throttle
} from '../src'

// alternative: export default function () | import myFunction from '../src'

describe('Testing Dev Ops Setup', () => {
  it('exposes the Chai expect method', () => {
    expect(1).to.not.equal(2)
  })

  it('works with ES6 import export', () => {
    expect(alwaysTrue()).to.be.true
  })
})

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

// Example from http://sinonjs.org/
describe('Testing the throttle function', () => {
  var clock

  before(() => { clock = sinon.useFakeTimers() })
  after(() => { clock.restore() })

  it('calls callback after 100ms', () => {
    const callback = sinon.spy()

    throttle(callback)()

    clock.tick(99)
    expect(callback.notCalled).to.be.true

    clock.tick(1)
    expect(callback.calledOnce).to.be.true

    expect(new Date().getTime()).to.equal(100)
  })
})
