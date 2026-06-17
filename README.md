# @tsonic/globals

Global type definitions for Tsonic.

This package provides a target-neutral minimal global type layer:
1. **Base types** required by TypeScript (Array, String, Object, Function, etc.)
2. **Shared types** used by source packages (utility types, iterators, Promise, Symbol)

`@tsonic/globals` is declaration-only. It does not ship runtime JavaScript
helpers and does not define the active workspace surface by itself.

## Usage

### Standalone no-lib mode

```bash
npm install @tsonic/globals
```

```json
{
  "compilerOptions": {
    "noLib": true,
    "typeRoots": ["node_modules/@tsonic/globals"]
  }
}
```

This package supplies declarations only. Runtime behavior is provided by the
active surface and target implementation.

### JS surface

Do not layer `@tsonic/globals` and `@tsonic/js-globals` manually for JS projects.

Use the first-party JS surface directly:

```bash
npx --yes tsonic@latest init --surface @tsonic/js
```

`@tsonic/js` provides its own surface and ambient globals. `@tsonic/js-globals` is retired.

## What's included

### Base types (minimal definitions)
- `Array<T>`, `ReadonlyArray<T>` - indexer and iterator only
- `String`, `Number`, `Boolean` - empty base
- `Object`, `Function` - minimal
- `RegExp`, `IArguments`, `CallableFunction`, `NewableFunction`

### Utility types
- `Partial`, `Required`, `Readonly`, `Pick`, `Omit`
- `Record`, `Exclude`, `Extract`, `NonNullable`
- `Parameters`, `ReturnType`, `InstanceType`, `ConstructorParameters`

### Iterator/Generator types
- `Iterator`, `IteratorResult`, `Iterable`, `IterableIterator`
- `AsyncIterator`, `AsyncIterable`, `AsyncIterableIterator`
- `Generator`, `AsyncGenerator`

### Promise types
- `Promise`, `PromiseLike`, `PromiseConstructor`

### Other
- `Symbol`, `SymbolConstructor`
- `PropertyKey`
- Template literal utilities: `Uppercase`, `Lowercase`, `Capitalize`, `Uncapitalize`

## License

MIT
