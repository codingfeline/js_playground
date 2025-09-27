const el = ['hello there', 'hello world', 'hello universe']

el.map((e, i) => {
  const newDiv = document.createElement('div')
  const newContent = document.createTextNode(e)
  newDiv.appendChild(newContent)
  newDiv.style.color = i % 2 === 0 ? 'blue' : 'red'

  const currEl = document.querySelector('#table1')
  document.body.insertBefore(newDiv, currEl)
})

for (let i = 1; i < 4; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 2000)
}

let newV = 6
newV++
console.log(newV)

const uniq1 = Symbol('unique')
const uniq2 = Symbol('unique')
console.log(uniq1)
console.log(uniq1 === uniq2)

const bigN = 212121212121212
console.log(bigN, typeof bigN)
console.log('hello'.charCodeAt(0))

// let userName = prompt('What is your name?', 'Guest')
// console.log(userName)

// let age = prompt('How old are you?')
// if (age !== null) {
//   console.log('You are ' + age + ' years old.')
// } else {
//   console.log('User canceled the prompt.')
// }

console.log(5 === 2 + 3 || 4 == 2)

const emailMask = email => {
  const [username, domain] = email.split('@')
  const adPos = email.indexOf('@')
  const userStart = username.slice(0, 1)
  const userEnd = username.slice(adPos - 1)
  const star = '*'.repeat(username.length - 2)
  // const mask = userStart + star + userEnd + '@' + domain
  const mask = userStart + star + userEnd + email.slice(adPos)
  return mask
}

console.log(emailMask('naz@example.com'))

const minIncomeForDuplex = 60000
const minCreditScoreForDuplex = 700

const minIncomeForCondo = 45000
const minCreditScoreForCondo = 680

const minIncomeForCar = 30000
const minCreditScoreForCar = 650

function getLoanMessage(annualIncome, creditScore) {
  if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return 'You qualify for a duplex, condo, and car loan.'
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return 'You qualify for a condo and car loan.'
  } else if (annualIncome >= minIncomeForCar) {
    return 'You qualify for a car loan.'
  } else {
    return undefined
  }
}
console.log(getLoanMessage(65000, 750))

let num = 'this is not a number'
num = Number(num)
console.log(typeof num, num)

const lunch = ['beef', 'rice']
const rand = Math.floor(Math.random() * lunch.length)
console.log(`Menu items: ${lunch.join(', ')}`)
console.log(lunch, rand, lunch ? lunch[rand] : 'none')
