# @jdthornton/usetimeout

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/usetimeout.svg)](https://www.npmjs.com/package/@jdthornton/usetimeout)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/usetimeout.svg)](https://www.npmjs.com/package/@jdthornton/usetimeout)

React timeout hook.

## Install

```
$ npm install @jdthornton/usetimeout
```

## Usage

```js
import useTimout from "@jdthornton/usetimeout";

function App({ isSet, handleTimeoutEnd }){

  // 'handleTimeoutEnd' will be called at the end of 1000s if isSet is true
  useTimout(handleTimeoutEnd, isSet ? 1000 : null)

  return null
}
```
