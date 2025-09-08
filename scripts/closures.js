let file2 = 'closures.js'

function createBase(num) {
  return function (inner) {
    fancyLog(num + inner, 'lightgray')
  }
}
var addSix = createBase(6)
addSix(10)

function a() {
  for (var i = 0; i <= 3; i++) {
    setTimeout(function log() {
      fancyLog([i, file2, 'line-14'], '#ad5aad')
    }, i * 1000)
  }
}
a()
//* output is 3, 3 times
//* make the above output 0,1,2 without using let

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       fancyLog(i, colour.red)
//     }, i * 1000)
//   }
//   inner(i)
// }

//private counter
function counter() {
  let _counter = 0

  function add(num) {
    _counter += num
  }

  function retrieve() {
    return 'Counter = ' + _counter
  }

  return {
    add,
    retrieve,
  }
}

const c = counter()
c.add(5)
c.add(8)
fancyLog(c.retrieve(), 'red')
fancyLog(c._counter, 'yellow')

// let bigData = new Array(1000000).fill('naz')
// fancyLog(bigData, 'lightblue')
colour = {
  red: 'red',
}
