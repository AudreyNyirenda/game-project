export function get(sel) {
  return document.querySelector(sel)
}

export function getAll(sel) {
  return Array.from(document.querySelectorAll(sel))
}

export function initModule(name, callback) {
  getAll(`[data-js=${name}]`).forEach(el => {
    callback(el)
  })
}
