# @esmkit/decode-uri-component

Decodes strings encoded by `encodeURI` and `encodeURIComponent`, without throwing errors on invalid escapes, instead, it returns `null`.

## Installation

```bash
npm install @esmkit/decode-uri-component
# or
yarn add @esmkit/decode-uri-component
# or
bun add @esmkit/decode-uri-component
```

## Usage

```ts
import { decodeURIComponent } from '@esmkit/decode-uri-component';

console.log(decodeURIComponent('test')) // 'test'
console.log(decodeURIComponent('%25')) // '%'
console.log(decodeURIComponent('/test/hel%2Flo')) // '/test/hel/lo'

console.log(decodeURIComponent('/test/hel%"Flo')) // null
console.log(decodeURIComponent('%7B%ab%7C%de%7D')) // null
console.log(decodeURIComponent('%ab')) // null
```

## License

MIT © BILLGO. See LICENSE for details.