# babel-plugin-fn-call-operator

just like Haskell's '$' operator.

## Examples

```javascript
store.dispatch << setTagForm({'name': val.target.value})
```

Turn into

```javascript
store.dispatch(setTagForm({'name': val.target.value}))

```

## Disabling in current scope

If you want to use the original pipe operator, you can disable this plugin in current scope (and it children scopes) using `"no fn-call"` directive as described in the original one.

## Installation

```sh
$ npm install --save-dev babel-plugin-fn-call-operator
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["fn-call-operator"]
}
```

### Via CLI

```sh
$ babel --plugins fn-call-operator script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["fn-call-operator"]
});
```

# License

MIT
