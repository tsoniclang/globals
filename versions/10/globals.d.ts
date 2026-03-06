import type { char } from "@tsonic/core/types.js";
import { Array$instance, __Array$views, String$instance, __String$views, Double$instance, __Double$views, Boolean$instance, __Boolean$views, Object$instance } from "@tsonic/dotnet/System/internal/index.js";
import type { IEnumerable, IEnumerator as IEnumeratorT } from "@tsonic/dotnet/System.Collections.Generic.js";

declare global {
  interface Array<T> extends Array$instance, __Array$views, IEnumerable<T> {
    [n: number]: T;
    [Symbol.iterator](): IterableIterator<T>;
    GetEnumerator(): IEnumeratorT<T>;
  }

  interface ReadonlyArray<T> extends Array$instance, __Array$views, IEnumerable<T> {
    readonly [n: number]: T;
    [Symbol.iterator](): IterableIterator<T>;
    GetEnumerator(): IEnumeratorT<T>;
  }

  interface String extends String$instance, __String$views {
    readonly [index: number]: char;
  }

  interface Number extends Double$instance, __Double$views {
  }

  interface Boolean extends Boolean$instance, __Boolean$views {
  }

  interface Object extends Object$instance {
  }
}

export {};
