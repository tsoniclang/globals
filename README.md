# @tsonic/globals

Global type definitions for Tsonic.

This package provides:
1. **Base types** required by TypeScript (Array, String, Object, Function, etc.)
2. **Shared types** used by both modes (utility types, iterators, Promise, Symbol)

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

### JS mode (use with @tsonic/js-globals)

```bash
npm install @tsonic/globals @tsonic/js-globals
```

```json
{
  "compilerOptions": {
    "noLib": true,
    "typeRoots": [
      "node_modules/@tsonic/globals",
      "node_modules/@tsonic/js-globals"
    ]
  }
}
```

Arrays have `.map`, `.filter`, `.length`, etc. Strings have `.slice`, `.indexOf`, etc.

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
