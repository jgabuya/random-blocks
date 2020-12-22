import jQuery from 'jquery'

const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)]
  }

  return color
}

const getRandomPosition = (min, max) => Math.random() * (max - min) + min

function generateRandomBlock({
  $, // jQuery object
  $parent,
  color,
  position,
}) {
  const $el = $('<div></div>')
    .css({
      background: color,
      top: position.top,
      left: position.left,
    })
    .addClass('node')
    .hide()

  return $parent.append($el.fadeIn(500))
}

;(function ($) {
  // cache DOM selectors
  const $window = $(window)
  const $wrapper = $('#wrapper')

  const width = $window.width()
  const height = $window.height()

  setInterval(function () {
    const position = {
      top: getRandomPosition(0, height),
      left: getRandomPosition(0, width),
    }

    generateRandomBlock({
      $,
      $parent: $wrapper,
      color: getRandomColor(),
      position,
    })
  }, 100)
})(jQuery)
