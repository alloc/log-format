# @alloc/log-format

Evaluate `console.log` format specifiers (eg: `%O`) before logging.

**Format specifiers:**
- `%O` Use [`pretty-format`](https://www.npmjs.com/package/pretty-format) before insertion
- `%s` Use `String(value)` before insertion
- `%f` Use `Number(value)` before insertion
- `%d` Use `Math.floor(value)` before insertion (alias: `%i`)

### Example

```js
import format from '@alloc/log-format'

format('a: %O, b: %O', /.+/, new Date)
// => 'a: /.+/, b: 2020-06-26T18:39:40.258Z'

format({ a: [1, 2], b: new Set([3, 4]) })
// => '{"a": [1, 2], "b": Set {3, 4}}'
```
