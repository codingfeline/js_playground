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
