const el = document.querySelector('#string_manipulation')
const el2 = document.querySelector('#string_manipulation2')

const text = ''
const str = text.slice(0, 1).toUpperCase() + text.slice(1)
console.log(str)
el.textContent = str

if (text) {
  const [first, ...rest] = text
  el2.textContent = first.toUpperCase() + rest.join('')
}
