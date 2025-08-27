// Currying in JavaScript
// sum(2)(6)(4)

function sum3(a) {
  return function (b) {
    return function (c) {
      fancyLog([a + b + c], 'pink')
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
