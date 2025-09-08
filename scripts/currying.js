// Currying in JavaScript
// sum(2)(6)(4)

function sum3(a) {
  return function (b) {
    return function (c) {
      fancyLog([a + b + c], '#e095a1')
    }
  }
}

sum3(2)(6)(4)

// Infinite Currying
function add(a) {
  return function (b) {
    if (b) return add(a + b)
    return a
  }
}

console.log(add(5)(2)(4)())

// Partial Application
function sum4(a) {
  return function (b, c) {
    return a + b + c
  }
}

fancyLog(sum4(20)(1, 4), '#cf7181')
