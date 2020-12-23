import $ from 'jquery'
import { random } from 'lodash'
import randomColor from 'randomcolor'
import { ANIMATION_SPEED_MS, NODE_MIN_WIDTH, NODE_MAX_WIDTH } from '../config'

const getViewportDimensions = () => {
  const $window = $(window)

  return {
    width: $window.width(),
    height: $window.height(),
  }
}

const getElementById = (id) => $(`#${id}`)

const insertNode = ({ parent, node: { id, emoji } }) => {
  const { width: x, height: y } = getViewportDimensions()
  const dimension = random(NODE_MIN_WIDTH, NODE_MAX_WIDTH)
  const borderWidth = dimension / 10
  const fontSize = dimension / 2

  const [foregroundColor, backgroundColor] = randomColor({
    count: 2,
    luminosity: 'light',
    hue: 'random',
  })

  const el = $('<div></div>')
    .attr('id', id)
    .css({
      background: backgroundColor,
      top: random(0, y - dimension - borderWidth * 2),
      left: random(0, x - dimension - borderWidth * 2),
      position: 'absolute',
      width: dimension,
      height: dimension,
      border: `${borderWidth}px solid ${foregroundColor}`,
      borderRadius: '50%',
      textAlign: 'center',
      display: 'none',
    })

  const innerEl = $('<span></span>')
    .html(emoji)
    .css({
      fontFamily: 'Helvetica, sans-serif',
      fontSize,
      display: 'inline-block',
      position: 'relative',
      top: dimension / 2 - fontSize / 1.8,
    })

  el.append(innerEl)
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
