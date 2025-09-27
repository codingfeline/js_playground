let arr = [1, 2, 3]
copyArr = arr.slice()
console.log(copyArr)

let anothercopy = [...arr]
console.log(anothercopy)

copyArr.push('hi')
console.log('arr', arr)

console.log('copyArr', copyArr)
console.log('-----')

let copyArr2 = arr.slice()
console.log('copyArr2', copyArr2)
copyArr2.splice(1)
console.log('copyArr2', copyArr2)
