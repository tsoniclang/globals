declare global {
  class Error {
    name: string;
    message: string;
    stack?: string;
    constructor(message?: string);
  }

  interface Function {
  }

  interface CallableFunction extends Function {
  }

  interface NewableFunction extends Function {
  }

  interface IArguments {
  }

  interface RegExp {
  }

  interface ImportMeta {
  }

  interface String {
  }

  interface Number {
  }

  interface Boolean {
  }

  interface Object {
  }

  interface SymbolConstructor {
    readonly iterator: symbol;
    readonly asyncIterator: symbol;
  }

  interface Array<T> {
    [n: number]: T;
    [Symbol.iterator](): IterableIterator<T>;
  }

  interface ReadonlyArray<T> {
    readonly [n: number]: T;
    [Symbol.iterator](): IterableIterator<T>;
  }

  interface Promise<T> {
    then<TResult1 = T, TResult2 = never>(onfulfilled?: | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null, onrejected?: | ((reason: unknown) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null): Promise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: | ((reason: unknown) => TResult | PromiseLike<TResult>)
        | undefined
        | null): Promise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  interface PromiseLike<T> {
    then<TResult1 = T, TResult2 = never>(onfulfilled?: | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null, onrejected?: | ((reason: unknown) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null): PromiseLike<TResult1 | TResult2>;
  }

  interface PromiseConstructor {
    new<T>(executor: (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (reason?: unknown) => void
      ) => void): Promise<T>;
  }

  interface Iterator<T, TReturn = unknown, TNext = unknown> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value?: TReturn): IteratorResult<T, TReturn>;
    throw(e?: unknown): IteratorResult<T, TReturn>;
  }

  interface IteratorResult<T, TReturn = unknown> {
    done: boolean;
    value: T | TReturn;
  }

  interface IteratorYieldResult<T> {
    done: false;
    value: T;
  }

  interface IteratorReturnResult<TReturn> {
    done: true;
    value: TReturn;
  }

  interface Iterable<T, TReturn = unknown, TNext = unknown> {
    [Symbol.iterator](): Iterator<T, TReturn, TNext>;
  }

  interface IterableIterator<T, TReturn = unknown, TNext = unknown> extends Iterator<T, TReturn, TNext> {
    [Symbol.iterator](): IterableIterator<T, TReturn, TNext>;
  }

  interface AsyncIterator<T, TReturn = unknown, TNext = unknown> {
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
    return(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
    throw(e?: unknown): Promise<IteratorResult<T, TReturn>>;
  }

  interface AsyncIterable<T, TReturn = unknown, TNext = unknown> {
    [Symbol.asyncIterator](): AsyncIterator<T, TReturn, TNext>;
  }

  interface AsyncIterableIterator<T, TReturn = unknown, TNext = unknown> extends AsyncIterator<T, TReturn, TNext> {
    [Symbol.asyncIterator](): AsyncIterableIterator<T, TReturn, TNext>;
  }

  interface Generator<T = unknown, TReturn = unknown, TNext = unknown> extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: unknown): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
  }

  interface AsyncGenerator<T = unknown, TReturn = unknown, TNext = unknown> extends AsyncIterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
    return(value: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
    throw(e: unknown): Promise<IteratorResult<T, TReturn>>;
    [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;
  }

  interface TemplateStringsArray extends ReadonlyArray<string> {
    readonly raw: readonly string[];
  }

  type PropertyKey = string | number | symbol;

  type Partial<T> = { [P in keyof T]?: T[P] };

  type Required<T> = { [P in keyof T]-?: T[P] };

  type Readonly<T> = { readonly [P in keyof T]: T[P] };

  type Pick<T, K extends keyof T> = { [P in K]: T[P] };

  type Record<K extends PropertyKey, T> = { [P in K]: T };

  type Exclude<T, U> = T extends U ? never : T;

  type Extract<T, U> = T extends U ? T : never;

  type Omit<T, K extends PropertyKey> = Pick<T, Exclude<keyof T, K>>;

  type NonNullable<T> = T extends null | undefined ? never : T;

  type Parameters<T extends (...args: never[]) => unknown> = T extends (...args: infer P) => unknown ? P : never;

  type ConstructorParameters<T extends new (...args: never[]) => object> = T extends new (...args: infer P) => object ? P : never;

  type ReturnType<T extends (...args: never[]) => unknown> = T extends (...args: never[]) => infer R ? R : never;

  type InstanceType<T extends new (...args: never[]) => object> = T extends new (...args: never[]) => infer R ? R : never;

  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

  type Uppercase<S extends string> = intrinsic;

  type Lowercase<S extends string> = intrinsic;

  type Capitalize<S extends string> = intrinsic;

  type Uncapitalize<S extends string> = intrinsic;

  const Symbol: SymbolConstructor;

  const Promise: PromiseConstructor;
}

export {};
