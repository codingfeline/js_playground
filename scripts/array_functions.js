let fileArray = 'array_functions'

// pop
const fileArr1 = [1, 2, 3, 4]
const popped = fileArr1.pop()
fancyLog([popped, fileArray, 'line-6'], '#6363d8')
fancyLog(['fileArr1', fileArr1, fileArray], '#6363d8')

// slice
const fileArray2 = [4, 5, 6, 7]
console.log(fileArray2.slice(1, 3))

// splice
const fileArray3 = [1, 2, 3, 4, 5]
console.log(fileArray3.splice(2, 1, 'a'))

const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb')
// Inserts at index 1
console.log(months)
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May')
console.log(months)

const naz2 = 'naz2'
console.log(naz2.split('z'))

let fileArray4 = 'array_functions'
let fileArr5 = fileArray4.split('_')
fancyLog([fileArr5, fileArray4], '#a6f060')

console.log(typeof null)
console.log(typeof undefined)

const newC = null ?? 'hello'
console.log(newC)

function isLeapYear(num) {
  if (num % 4 === 0) {
    if (num % 100 === 0 && num % 400 !== 0) {
      return num + ' is not a leap year. ' + (num % 400)
    }
    return num + ' is a leap year.'
  }
  return num + ' is not a leap year. (not divisible by 4)'
}
console.log(isLeapYear(2021))
console.log(isLeapYear(2000))
console.log(isLeapYear(2020))
console.log(isLeapYear(2100))
console.log(isLeapYear(2600))
console.log(isLeapYear(2010))
