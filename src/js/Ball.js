console.clear()
export class Ball {
  constructor(x, y) {
    this.createElement(x, y)
    this.updatePosition()
    this.queueUpdate()
    this.setupEvents()
  }

  setupEvents() {
    this.el.addEventListener('click', event => {
      event.stopPropagation()
      this.destroy()
    })
  }

  destroy() {
    this.el.style.transform = 'scale(5)'
    setTimeout(() => {
      this.el.remove()
      this.el = null
    }, 100)
  }

  queueUpdate() {
    setTimeout(() => {
      this.a = this.a ? this.a * 1.008 : 0.1
      this.pos.y -= this.a
      this.updatePosition()
      if (this.pos.y < 50) {
        this.destroy()
      } else {
        this.queueUpdate()
      }
    }, 10)
  }

  createElement(x, y) {
    this.pos = { x, y }
    this.el = document.createElement('div')
    this.el.className = 'ball'
    document.body.insertAdjacentElement('beforeend', this.el)
  }

  updatePosition() {
    this.el.style.left = `${this.pos.x}px`
    this.el.style.top = `${this.pos.y}px`
  }
}

function handleClick(event) {
  const { clientX, clientY } = event
  new Ball(clientX, clientY)
}
