let file3 = 'booking'

const days = ['sun-thu', 'fri-sat-early', 'fri-sat-late']
const sunThuTimes = [
  '17:30',
  '17:45',
  '18:00',
  '18:15',
  '18:30',
  '18:45',
  '19:00',
  '19:15',
  '19:30',
  '19:45',
  '20:00',
  '20:15',
  '20:30',
  '20:45',
  '21:00',
  '21:15',
  '21:30',
  '21:45',
  '22:00',
]
const early = ['17:30', '17:45']
const late = [
  '19:30',
  '19:45',
  '20:00',
  '20:15',
  '20:30',
  '20:45',
  '21:00',
  '21:15',
  '21:30',
  '21:45',
  '22:00',
  '22:15',
  '22:30',
  '22:45',
  '23:00',
]

function test(name) {
  return function (cat) {
    return name == 'naz' && cat == 'chloie'
      ? 'me and my cat'
      : name == 'naz' || cat == 'chloie'
      ? 'me or my cat'
      : 'both wrong'
  }
}

fancyLog(test('naz2')('chloie'), '#a75757')
