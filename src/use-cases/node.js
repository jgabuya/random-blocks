import { random, filter } from 'lodash'
import { v4 } from 'uuid'
import randomColor from 'randomcolor'
import { Node } from '../entities'
import { NODE_MIN_WIDTH, NODE_MAX_WIDTH } from '../config'

const addRandom = ({ collection, viewport: { width, height }, callback }) => {
  const dimension = random(NODE_MIN_WIDTH, NODE_MAX_WIDTH)

  const nodeToAdd = new Node({
    id: v4(),
    color: randomColor(),
    width: dimension,
    height: dimension,
    position: {
      x: random(0, width),
      y: random(0, height),
    },
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
