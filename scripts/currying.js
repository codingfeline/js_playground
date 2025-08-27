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
