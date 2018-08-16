import { Ball } from './Ball'

export default class Game {
  constructor() {
    document.body.addEventListener('click', this.handleCLick)
  }

  handleCLick(event) {
    const { clientX, clientY } = event
    new Ball(clientX, clientY)
  }
}
