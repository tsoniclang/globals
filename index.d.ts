/**
 * @tsonic/globals
 *
 * Global type definitions for Tsonic.
 *
 * This package provides:
 * 1. Synthesized Array<T> combining System.Array with generic collection interfaces
 * 2. BCL primitive methods on String, Number, Boolean (from @tsonic/dotnet)
 * 3. TypeScript compiler intrinsics (utility types, iterators, Promise, Symbol)
 */

// BCL types from @tsonic/dotnet
import {
  Array$instance, __Array$views,
  String$instance, __String$views,
  Double$instance, __Double$views,
  Boolean$instance, __Boolean$views,
  Object$instance
} from "@tsonic/dotnet/System/internal/index.js";
import { IList_1, ICollection_1, IEnumerable_1, IReadOnlyList_1, IReadOnlyCollection_1 } from "@tsonic/dotnet/System.Collections.Generic/internal/index.js";

declare global {
  /**
   * Array<T> - Synthesized generic array type
   *
   * Combines:
   * - System.Array instance methods (length, rank, clone, copyTo, etc.)
   * - Generic collection interfaces (IList<T>, ICollection<T>, IEnumerable<T>)
   * - TypeScript indexer and iterator
   *
   * This gives arrays full BCL method support.
   */
  interface Array<T> extends Array$instance, __Array$views, IList_1<T>, ICollection_1<T>, IEnumerable_1<T>, IReadOnlyList_1<T>, IReadOnlyCollection_1<T> {
    [n: number]: T;
    [Symbol.iterator](): IterableIterator<T>;
  }

  interface ReadonlyArray<T> extends Array$instance, __Array$views, IReadOnlyList_1<T>, IReadOnlyCollection_1<T>, IEnumerable_1<T> {
    readonly [n: number]: T;
    [Symbol.iterator](): IterableIterator<T>;
  }

  /**
   * String - augmented with BCL methods from System.String
   */
  interface String extends String$instance, __String$views {}

  /**
   * Number - augmented with BCL methods from System.Double
   */
  interface Number extends Double$instance, __Double$views {}

  /**
   * Boolean - augmented with BCL methods from System.Boolean
   */
  interface Boolean extends Boolean$instance, __Boolean$views {}

  /**
   * Object - augmented with BCL methods from System.Object
   */
  interface Object extends Object$instance {
    constructor: Function;
  }

  /**
   * Function - minimal base definition
   */
  interface Function {
    prototype: any;
  }

  /**
   * Required TypeScript compiler internals
   */
  interface CallableFunction extends Function {}
  interface NewableFunction extends Function {}
  interface IArguments {}

  /**
   * RegExp - minimal base definition
   */
  interface RegExp {}

  /**
   * Symbol
   */
  interface SymbolConstructor {
    readonly iterator: symbol;
    readonly asyncIterator: symbol;
    readonly hasInstance: symbol;
    readonly isConcatSpreadable: symbol;
    readonly species: symbol;
    readonly toPrimitive: symbol;
    readonly toStringTag: symbol;
  }

  const Symbol: SymbolConstructor;

  /**
   * PropertyKey - required for index signatures
   */
  type PropertyKey = string | number | symbol;

  /**
   * Utility types
   */
  type Partial<T> = { [P in keyof T]?: T[P] };
  type Required<T> = { [P in keyof T]-?: T[P] };
  type Readonly<T> = { readonly [P in keyof T]: T[P] };
  type Pick<T, K extends keyof T> = { [P in K]: T[P] };
  type Record<K extends keyof any, T> = { [P in K]: T };
  type Exclude<T, U> = T extends U ? never : T;
  type Extract<T, U> = T extends U ? T : never;
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  type NonNullable<T> = T extends null | undefined ? never : T;
  type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
  type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
  type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
  type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;

  /**
   * Promise types
   */
  interface Promise<T> {
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): Promise<TResult1 | TResult2>;
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): Promise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  interface PromiseLike<T> {
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): PromiseLike<TResult1 | TResult2>;
  }

  interface PromiseConstructor {
    new <T>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    resolve(): Promise<void>;
    resolve<T>(value: T | PromiseLike<T>): Promise<T>;
    reject<T = never>(reason?: any): Promise<T>;
    all<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T[]>;
    race<T>(values: readonly (T | PromiseLike<T>)[]): Promise<T>;
  }

  const Promise: PromiseConstructor;

  /**
   * Iterator types
   */
  interface Iterator<T, TReturn = any, TNext = undefined> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return?(value?: TReturn): IteratorResult<T, TReturn>;
    throw?(e?: any): IteratorResult<T, TReturn>;
  }

  interface IteratorResult<T, TReturn = any> {
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

  interface Iterable<T, TReturn = any, TNext = undefined> {
    [Symbol.iterator](): Iterator<T, TReturn, TNext>;
  }

  interface IterableIterator<T, TReturn = any, TNext = undefined> extends Iterator<T, TReturn, TNext> {
    [Symbol.iterator](): IterableIterator<T, TReturn, TNext>;
  }

  /**
   * Async Iterator types
   */
  interface AsyncIterator<T, TReturn = any, TNext = undefined> {
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
    return?(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
    throw?(e?: any): Promise<IteratorResult<T, TReturn>>;
  }

  interface AsyncIterable<T, TReturn = any, TNext = undefined> {
    [Symbol.asyncIterator](): AsyncIterator<T, TReturn, TNext>;
  }

  interface AsyncIterableIterator<T, TReturn = any, TNext = undefined> extends AsyncIterator<T, TReturn, TNext> {
    [Symbol.asyncIterator](): AsyncIterableIterator<T, TReturn, TNext>;
  }

  /**
   * Generator types
   */
  interface Generator<T = unknown, TReturn = any, TNext = unknown> extends Iterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
  }

  interface AsyncGenerator<T = unknown, TReturn = any, TNext = unknown> extends AsyncIterator<T, TReturn, TNext> {
    next(...args: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
    return(value: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
    throw(e: any): Promise<IteratorResult<T, TReturn>>;
    [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;
  }

  /**
   * Template literal type utilities
   */
  type Uppercase<S extends string> = intrinsic;
  type Lowercase<S extends string> = intrinsic;
  type Capitalize<S extends string> = intrinsic;
  type Uncapitalize<S extends string> = intrinsic;
}

// This export is required to make this file a module
export {};
