/* global describe it expect*/

// Here, I am importing a named functions with object destructuring
import { myFunction } from '../src'

// alternative: export default function () | import myFunction from '../src'

describe('karma test with Chai', () => {
  it('should expose the Chai expect method', () => {
    expect(1).to.not.equal(2)
  })

  it('should work with ES6 import export', () => {
    expect(myFunction()).to.be.true
  })
})
