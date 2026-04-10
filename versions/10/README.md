# @tsonic/globals

Global type definitions for Tsonic.

## Versioning

This repo is versioned by **.NET major**:

- **.NET 10** → `versions/10/` → npm: `@tsonic/globals@10.x`

When publishing, run: `npm publish versions/10 --access public`

This package provides the CLR/default-surface global type layer:
1. **Base types** required by TypeScript (Array, String, Object, Function, etc.)
2. **Shared types** used by the CLR/default surface (utility types, iterators, Promise, Symbol)

## Usage

### Dotnet mode (use this package alone)

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

Arrays use LINQ, strings use BCL methods.

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
