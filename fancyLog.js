function fancyLog(txt, back) {
  const now = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
  console.log(
    '%c' + txt + ' ' + now,
    `color: black; background:${back}; padding: 3px; border-radius:4px`
  )
}

const red = '\x1b[31m'
const reset = '\x1b[0m'

function fancyTime(txt) {
  console.time(`${red} ${txt} ${reset}`)
}

function fancyEnd(txt) {
  console.timeEnd(`${red} ${txt} ${reset}`)
}

// console.time(`${red}Timer A${reset}`)
// setTimeout(() => {
//   console.timeEnd(`${red}Timer A${reset}`)
// }, 1000)
