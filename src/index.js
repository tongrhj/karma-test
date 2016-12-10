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

export function throttle (callback) {
  var timer
  return function () {
    clearTimeout(timer)
    var args = [].slice.call(arguments)
    timer = setTimeout(function () {
      callback.apply(this, args)
    }, 100)
  }
}
