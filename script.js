function square(num) {
  return num * num
}

const square2 = function (num) {
  return num * num
}

function displaySquare(fn, num) {
  console.log('Square of ' + num + ' is ' + fn(num))
}

displaySquare(square, 4)
displaySquare(square, 7)
;(function sq(num) {
  console.log(num * num)
})(8)

//function scope
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i)
//   }, i * 1000)
// }

var x = 21
var fun = function () {
  console.log(x)
  var x = 20
}

fun()

fun2()

function fun2() {
  console.log('func')
}

var x // declaration
x = 5 // initialization (assigning value)
let y = 10 // declaration + initialization together

const arr = [8, 9, 10]
arr.map(ar => console.log(ar))

//
function fn() {
  console.log(arguments)
}
fn(1, 2, 3)

// arrow functions don't have access to the arguemnts keyword
// const fn2 = () => console.log(arguments)
// fn2(1, 2, 3)

fancyLog('naz', 'lightgreen')
document
  .getElementById('btn')
  .addEventListener('click', () => fancyLog('you clicked on', 'orange'))

//
var user = 'Global User'

const userObj = {
  user: 'Block User',
  fn1: () => {
    fancyLog('function1 ' + this.user, 'yellow') // user refers to Global User
  },
  fn2() {
    fancyLog('function2 ' + this.user, 'orange') // user refers to Block User
  },
}

userObj.fn1()
userObj.fn2()

// CLOSURES
function makeFunc() {
  let name = 'Mozilla'
  function displayName() {
    fancyLog(name, 'yellow')
  }
  return displayName
}
let myFunc = makeFunc()
myFunc()
makeFunc()

//
