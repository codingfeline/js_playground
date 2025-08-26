function find(index) {
  let a = []
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i
  }
  fancyLog(a[index], 'pink')
}

console.time('6')
find('6')
console.timeEnd('6')

console.time('12')
find('12')
console.timeEnd('12')

// with closure
function find2() {
  let a = []
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i
  }
  return function (index) {
    fancyLog(a[index], 'pink')
  }
}

const closure = find2()
// console.time('6')
fancyTime('6')
closure('6')
fancyEnd('6')
// console.timeEnd('6')

fancyTime('12')
closure('12')
fancyEnd('12')

///
