export function getDecks() {
  return Promise.resolve({})
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function saveDeck(title) {
  return new Promise(function(resolve) {
    resolve(generateUID())
  })
}

export function deleteDeck(id) {
  return Promise.resolve()
}

export function saveCard(deckId, question, answer) {
  return Promise.resolve()
}
