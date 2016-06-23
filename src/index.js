export function alwaysTrue () {
  return true
}

export function isEven (n) {
  return n % 2 === 0
}

export function countLetters (word) {
  if (typeof word !== 'string') {
    return false
  } else {
    return Array.prototype.slice.call(word).length
  }
}
