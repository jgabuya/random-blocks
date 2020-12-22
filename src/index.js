import { random } from 'lodash'
import { addRandom, removeRandom } from './use-cases'
import {
  getElementById,
  getViewportDimensions,
  insertNode,
  removeNode,
} from './helpers/dom'
import { RUNTIME_SPEED_MS } from './config'

const run = () => {
  let nodes = []

  const { width, height } = getViewportDimensions()

  const addRandomCallback = (node) => {
    insertNode({
      parent: getElementById('wrapper'),
      node,
    })
  }

  setInterval(() => {
    switch (random(0, 1)) {
      case 0:
        nodes = addRandom({
          collection: nodes,
          viewport: { width, height },
          callback: addRandomCallback,
        })

        break

      case 1:
        nodes = removeRandom({
          collection: nodes,
          callback: removeNode,
        })
    }

    console.log({ nodes })
  }, RUNTIME_SPEED_MS)
}

run()
