const rand = arr => Math.floor(Math.random() * arr.length)

const arr1 = ['Bobbie', 'Daisy', 'Chloie']

const getRandPet = arr => {
  let i = rand(arr)
  return arr[i]
}
console.log(getRandPet(arr1))
