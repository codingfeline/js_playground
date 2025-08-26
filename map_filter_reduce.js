const numbs = [1, 2, 3, 4]
const multiplyThree = numbs.map(num => {
  return num * 3
})
fancyLog(multiplyThree, 'pink')

const arr2 = [2, 3, 4, 5]
const mapResult = arr2.map(ar => {
  return ar + 2
})
const foreachResult = arr2.forEach((ar, i) => {
  arr2[i] = ar + 3
})
console.log(foreachResult) // undefined
console.log(arr2) // (4) [5, 6, 7, 8]
fancyLog([mapResult, ' mapResult'], '#9472ca')

const moreThanTwo = numbs.filter(n => n > 2)
fancyLog([moreThanTwo, ' moreThanTwo'], '#be8686')

const sum = arr2.reduce((acc, curr, arr2) => acc + curr, 0)
fancyLog(sum, 'green')

const max = arr2.reduce((acc, curr) => (curr > acc ? curr : acc))
fancyLog(max, 'lightgreen')

// Polyfill for map()
// Array.map((num, i, arr) => {})
Array.prototype.myMap = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this))
  }
  return temp
}
const multiply3 = numbs.myMap((num, i, arr) => num * 3)
fancyLog([multiply3, ' multiply3'], '#6767eb')
console.log(multiply3)fd

// Polyfill for filter()
Array.prototype.myFilter = function (cb) {
  let temp = []
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i])
  }
  return temp
}
const moreThan2 = numbs.myFilter(n => n > 2)
console.log(moreThan2)

// Polyfill for reduce
Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]
  }
  return accumulator
}

const sum2 = numbs.myReduce((acc, curr, i, ar) => {
  return acc + curr
}, 0)
fancyLog([sum2, ' sum2'], 'orange')
