import $ from 'jquery'
import { ANIMATION_SPEED_MS } from '../config'

const getViewportDimensions = () => {
  const $window = $(window)

  return {
    width: $window.width(),
    height: $window.height(),
  }
}

const getElementById = (id) => $(`#${id}`)

const insertNode = ({
  parent,
  node: {
    id,
    color,
    width,
    height,
    position: { x, y },
  },
}) => {
  const el = $('<div></div>')
    .attr('id', id)
    .css({
      background: color,
      top: y - height,
      left: x - width,
      position: 'absolute',
      width,
      height,
      borderRadius: '50%',
      display: 'none',
    })

  parent.append(el)
  el.fadeIn(ANIMATION_SPEED_MS)
}

const removeNode = ({ id }) => {
  const element = $(`#${id}`)

  element.fadeOut(ANIMATION_SPEED_MS, () => {
    element.remove()
  })
}

export { getViewportDimensions, getElementById, insertNode, removeNode }
