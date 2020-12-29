export function getDecks() {

}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function saveDeck(title) {
  return new Promise(function(resolve) {
    resolve(generateUID())
  })
}

export function deleteDeck(title) {

}

export function saveCard(deckTitle, question, answer) {

}
