const el = document.querySelector('#string_manipulation')
const el2 = document.querySelector('#string_manipulation2')
const el3 = document.querySelector('#string_manipulation3')

const text = 'coding paws'
const str = text.slice(0, 1).toUpperCase() + text.slice(1)
console.log(str)
el.textContent = str

//* by giving a default value to first, this will not crash in case text is empty
const [first = '', ...rest] = text
el2.textContent = first.toUpperCase() + rest.join('')

el3.textContent = text ? text[0].toUpperCase() + text.slice(1) : ''
