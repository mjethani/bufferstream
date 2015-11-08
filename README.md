## Installation

```console
$ npm i node-bufferstream
node-bufferstream@0.1.0 node_modules/node-bufferstream
$ 
```

## Example

```javascript
import BufferStream from 'node-bufferstream'

const stream = new BufferStream('Hello')

stream.write(', world!')

stream.on('data', chunk => {
  process.stdout.write(chunk)
})

stream.on('end', () => {
  process.stdout.write('\n')
})
```

