//Module Pattern
var Module = function () {
  function privateMethod() {
    console.log('private')
  }
  return {
    publicMethod: function () {
      fancyLog('public', 'lightgreen')
    },
  }
}
const naz = Module()
naz.publicMethod()
// naz.privateMethod()

//call once
let view
function subscribe() {
  let called = 0

  return function () {
    if (called > 0) {
      fancyLog('Already subscribed', 'lightgreen')
    } else {
      view = 'NextFeline'
      fancyLog('Subscribe to ' + view, 'lightgrey')
      called++
    }
  }
}

let isSubscribed = subscribe()
document.getElementById('sub').addEventListener('click', () => isSubscribed())

// Once Polyfill
function once(func, context) {
  let ran

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments)
      func = null
    }

    return ran
  }
}
const hello = once((a, b) => console.log('hello', a, b))
hello(1, 2)
hello(1, 3)
hello(1, 2)
