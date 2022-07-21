console.log('Monty Hall Problem')

const games = 10000
let origWon = 0
let switchWon = 0

for (let i = 0; i < games; i++) {
  const correct = Math.floor(Math.random() * 3)
  const orig = Math.floor(Math.random() * 3)

  let revealed = Math.floor(Math.random() * 3)
  while (revealed === orig || revealed === correct) {
    revealed = Math.floor(Math.random() * 3)
  }

  const switched = [0, 1, 2].find((x) => x !== orig && x !== revealed)

  if (orig === correct) origWon++
  if (switched === correct) switchWon++
}

console.log('Games played:', games)
console.log('Orig won:', origWon)
console.log('Switch won:', switchWon)
