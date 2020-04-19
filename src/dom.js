window.dom = {
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector)
  },
  style(node, name, value) {
    if (arguments.length == 2) {
      if (typeof name === 'string') {
        return node.style[name]
      } else if (name instanceof Object) {
        for (key in name) {
          node.style[key] = name[key]
        }
      }
    } else if (arguments.length == 3) {
      node.style[name] = value
    }
  },
  each(elements, fn) {
    elements.forEach(x => {
      fn(x)
    })
  }
}