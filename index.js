var stream = require('stream')

function BufferStream(source, encoding, options) {
  stream.Duplex.call(this, options)

  this.__buffer = typeof source === 'string' || source instanceof Buffer
    ? new Buffer(source, encoding) : new Buffer(0)

  this.__cursor = 0
}

BufferStream.prototype = new stream.Duplex()
BufferStream.prototype.constructor = BufferStream

BufferStream.prototype._read = function (size) {
  var chunk = this.__buffer.slice(this.__cursor, size)

  if (chunk.length > 0) {
    this.__cursor += chunk.length

    this.push(chunk)
  }

  if (this.__cursor === this.__buffer.length) {
    this.push(null)
  }
}

BufferStream.prototype._write = function (chunk, encoding, callback) {
  try {
    this.__buffer = Buffer.concat([
      this.__buffer,
      typeof chunk === 'string' ? new Buffer(chunk, encoding) : chunk
    ])

    callback()
  } catch (error) {
    callback(error)
  }
}

module.exports = BufferStream

// vim: et ts=2 sw=2
