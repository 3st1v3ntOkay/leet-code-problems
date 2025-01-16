import type {
  Equal,
  Expect,
} from "@type-challenges/utils";

type TFirstChar<TValue extends string> =
  TValue extends `${infer FirstChar}${string}`
  ? FirstChar
  : never;

type TFirstItem<TValue extends unknown[]> =
  TValue extends [infer FirstItem, ...unknown[]]
  ? FirstItem
  : never;

const compose = <A, B, C, R>(
  f: (arg: A) => B,
  g: (arg: B) => C,
  h: (arg: C) => R,
) => (a: A) => (
  h(g(f(a)))
);

const upperCase = <T extends string>(x: T) => x.toUpperCase() as Uppercase<T>;
const lowerCase = <T extends string>(x: T) => x.toLowerCase() as Lowercase<T>;

const firstChar = <T extends string>(x: T) => x[0] as TFirstChar<T>;
const firstItem = <T extends unknown[]>(x: T) => x[0] as TFirstItem<T>;

const makeTuple = <T>(x: T): [T] => [x];
const makeBox = <T>(value: T): { value: T } => ({ value });

const t0 = compose(upperCase, makeTuple, makeBox)("hello!").value[0];

type t0_actual = typeof t0;
type t0_expected = "HELLO!";

type t0_test = Expect<Equal<t0_actual, t0_expected>>;

const t1 = compose(makeTuple, firstItem, makeBox)("hello!" as const).value;

type t1_actual = typeof t1;
type t1_expected = "hello!";

type t1_test = Expect<Equal<t1_actual, t1_expected>>;

const t2 = compose(upperCase, firstChar, lowerCase)("hello!");

type t2_actual = typeof t2;
type t2_expected = "h";

type t2_test = Expect<Equal<t2_actual, t2_expected>>;
