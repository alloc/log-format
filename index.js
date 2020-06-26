const prettyFormat = require('pretty-format')

module.exports = (...args) => {
  let output = ''
  let i = 0

  if (typeof args[0] == 'string') {
    const input = args[i++]
    const pattern = /%[dfisO]/g

    let match = null
    let offset = 0
    while ((match = pattern.exec(input))) {
      const arg = encoders[match[0]](args[i++])
      output += input.slice(offset, match.index) + arg
      offset = match.index + 2
    }
    output += input.slice(offset)
  }

  while (i < args.length) {
    const arg = args[i++]
    output = join(output, typeof arg == 'string' ? arg : format(arg))
  }

  return output
}

const join = (a, b) => (a ? (b ? a + ' ' + b : a) : b || '')

const format = arg => prettyFormat(arg, { min: true })

const encoders = {
  '%s': String,
  '%O': format,
  '%d': Math.floor,
  '%i': Math.floor,
  '%f': Number,
}
