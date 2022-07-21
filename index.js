console.log('Monty Hall Problem')

const games = 10000
let origWon = 0
let switchWon = 0

const pickOneOfThree = () => Math.floor(Math.random() * 3)

for (let i = 0; i < games; i++) {
  const correct = pickOneOfThree()
  const orig = pickOneOfThree()

  // Revealed is never the correct answer, nor the original pick
  let revealed = pickOneOfThree()
  while (revealed === orig || revealed === correct) revealed = pickOneOfThree()

  // Switched is to the one door remaining
  const switched = [0, 1, 2].find((x) => x !== orig && x !== revealed)

  // Count wins
  if (orig === correct) origWon++
  if (switched === correct) switchWon++
}

console.log('Games played:', games)
console.log('Orig won:', origWon)
console.log('Switch won:', switchWon)
