import AsyncStorage from '@react-native-community/async-storage';

const FLASH_CARDS_STORAGE_KEY = '@@ssmith-flash-card-storage@@'

export function getDecks() {
  return AsyncStorage.getItem(FLASH_CARDS_STORAGE_KEY)
    .then(result => result || '{}')
    .then(JSON.parse);
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function saveDecks(decks) {
  return AsyncStorage.setItem(FLASH_CARDS_STORAGE_KEY, JSON.stringify(decks));
}

export function saveDeck(title) {
  return getDecks()
    .then(decks => {
      const id = generateUID()
      const timestamp = Date.now()

      decks[id] = {
        id,
        title,
        timestamp,
        cards: [],
      }

      // XXX seems weird, I'm guessing there's a better way
      return new Promise(function(resolve) {
        saveDecks(decks)
          .then(() => resolve({
            id,
            timestamp,
          }))
      })
    })
}

export function deleteDeck(id) {
  return getDecks()
    .then(decks => {
      delete decks[id]
      return decks
    })
    .then(saveDecks)
}

export function saveCard(deckId, question, answer) {
  return Promise.resolve()
}
