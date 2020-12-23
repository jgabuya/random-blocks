import { random, filter } from 'lodash'
import faker from 'faker'
import { Node } from '../entities'
import { generateRandomEmoji } from '../helpers/emoji'

const addRandom = ({ collection, callback }) => {
  const nodeToAdd = new Node({
    id: faker.random.uuid(),
    emoji: generateRandomEmoji(),
  })

  callback(nodeToAdd)

  return [...collection, nodeToAdd]
}

const removeRandom = ({ collection, callback }) => {
  if (collection.length === 0) return collection

  const nodeToRemove = collection[random(0, collection.length - 1)]

  callback(nodeToRemove)

  return filter(collection, ({ id }) => id !== nodeToRemove.id)
}

export { addRandom, removeRandom }
