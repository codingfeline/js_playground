function test() {
  var a = 'hello'
  let b = 'bye'
  // const c
  //* Uncaught SyntaxError: Missing initializer in const declaration
  //* it's ok for let and var

  const d = 'test'
  // d = 'tested'
  //* Uncaught TypeError: Assignment to constant variable.
  // const d = 'tested'
  //* Uncaught SyntaxError: Identifier 'd' has already been declared

  if (true) {
    let a = 'hi'
    // var b = 'goodbye'
    //* above error: Identifier 'b' has already been declared
    //* illegal shadowing

    fancyLog(a, 'blue')
    fancyLog(b, 'green')
    fancyLog(d, 'red')
  }
}

test()

// hoisting
// var count
// console.log(count) //* Uncaught ReferenceError: count is not defined
// count = 1

// console.log(count2)
//* Uncaught ReferenceError: Cannot access 'count2' before initialization
let count2 = 2

function abc() {
  console.log(a)
  var a = 10
}
abc()
//* undefined

function def() {
  let b = 20
  const c = 30
  console.log(a, b, c)
  var a = 10
}
def()
//* undefined 20 30
