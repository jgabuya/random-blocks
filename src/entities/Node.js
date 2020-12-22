class Node {
  constructor({ id, color, width, height, position: { x, y } }) {
    this.id = id
    this.color = color
    this.width = width
    this.height = height
    this.position = {
      x,
      y,
    }
  }
}

export { Node }
