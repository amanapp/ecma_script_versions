# ECMAScript (ES6 to ES13) - Features & Explanations

This README file provides detailed updates and explanations for ECMAScript (JavaScript) versions 6 through 13. Each version brought powerful new syntax, methods, and paradigms to modern JavaScript development.

---

## 🌀 ES6 (ECMAScript 2015)

### Major Updates & Explanations:
- **`let` and `const`**: Block-scoped variable declarations replacing `var`.
- **Arrow Functions (`=>`)**: Shorter syntax, lexical `this` binding.
- **Template Literals**: Use backticks (``) to embed variables using `${}`.
- **Destructuring**: Extract values from arrays/objects.
- **Default Parameters**: Assign default values in function definitions.
- **Rest/Spread Operator (`...`)**: Group/ungroup values.
- **Enhanced Object Literals**: Property shorthand, method definitions.
- **Classes**: Syntactic sugar over prototype-based inheritance.
- **Modules**: `import`/`export` syntax for modular JavaScript.
- **Promises**: Handle asynchronous operations with `.then()` and `.catch()`.
- **New Data Structures**: `Map`, `Set`, `WeakMap`, `WeakSet`.
- **Symbols**: New primitive for unique identifiers.
- **Iterators & Generators**: Custom iteration logic with `yield`.
- **`for...of` Loop**: Iterate over iterable objects (e.g., arrays).

---

## ⚙️ ES7 (ECMAScript 2016)

### Updates & Explanations:
- **`Array.prototype.includes()`**: Checks if array includes a value.
- **Exponentiation Operator (`**`)**: `2 ** 3` is equivalent to `Math.pow(2, 3)`.

---

## ⚙️ ES8 (ECMAScript 2017)

### Updates & Explanations:
- **`async/await`**: Syntactic sugar over Promises for readable async code.
- **`Object.values()` / `Object.entries()`**: Convert object to arrays.
- **`padStart()` / `padEnd()`**: Pad strings to a certain length.
- **`Object.getOwnPropertyDescriptors()`**: Fetch all property descriptors.
- **Trailing Commas in Functions**: Avoid syntax errors during edits.

---

## ⚙️ ES9 (ECMAScript 2018)

### Updates & Explanations:
- **Rest/Spread Properties for Objects**: Copy and extract object properties.
- **Asynchronous Iteration (`for await...of`)**: Iterate over async iterables.
- **`Promise.prototype.finally()`**: Run code after promise settles.
- **RegExp Enhancements**:
  - Lookbehind assertions: `/(?<=prefix)word/`
  - Named capture groups: `/(?<year>\d{4})/`
  - DotAll flag (`/s`): `.` matches newline characters

---

## ⚙️ ES10 (ECMAScript 2019)

### Updates & Explanations:
- **`Array.prototype.flat()` / `flatMap()`**: Flatten nested arrays.
- **`Object.fromEntries()`**: Convert key-value array to object.
- **`trimStart()` / `trimEnd()`**: Trim whitespace.
- **Optional Catch Binding**: `catch {}` without parameter.
- **Symbol Description**: `Symbol('desc').description` returns `'desc'`.

---

## ⚙️ ES11 (ECMAScript 2020)

### Updates & Explanations:
- **Optional Chaining (`?.`)**: Safe access to deeply nested properties.
- **Nullish Coalescing (`??`)**: Default only when `null` or `undefined`.
- **BigInt**: Arbitrary-precision integers (`12345678901234567890n`).
- **`Promise.allSettled()`**: Wait for all promises regardless of result.
- **`globalThis`**: Universal global object across environments.
- **Dynamic `import()`**: Load modules dynamically.
- **`import.meta`**: Metadata about current module.
- **`matchAll()`**: Returns all regex matches with capturing groups.
- **Ordered `for-in`**: Property order guarantee.

---

## ⚙️ ES12 (ECMAScript 2021)

### Updates & Explanations:
- **Logical Assignment Operators**:
  - `||=`: Assign if falsy
  - `&&=`: Assign if truthy
  - `??=`: Assign if nullish
- **Numeric Separators**: Improve readability (e.g., `1_000_000`).
- **`String.prototype.replaceAll()`**: Replace all occurrences.
- **WeakRefs & Finalizers**: Advanced memory management tools.
- **`Promise.any()`**: Resolves as soon as one promise fulfills.
- **`AggregateError`**: Errors from `Promise.any()`.

---

## ⚙️ ES13 (ECMAScript 2022)

### Updates & Explanations:
- **Top-Level `await`**: Use `await` outside async functions in modules.
- **Class Fields**:
  - Public: `name = 'value'`
  - Private: `#id = 123`
- **`.at()` Method**: Access index like `arr.at(-1)`.
- **`Object.hasOwn()`**: Safer alternative to `hasOwnProperty()`.
- **Error Cause**: Pass underlying error to new error instance.
- **RegExp Match Indices (`/d`)**: Returns match start/end positions.

---

## ✅ Summary Table

| ES Version | Year | Key Features |
|------------|------|------------------------|
| ES6        | 2015 | Classes, Modules, Promises |
| ES7        | 2016 | `includes()`, `**` operator |
| ES8        | 2017 | `async/await`, object methods |
| ES9        | 2018 | Rest/spread objects, RegEx improvements |
| ES10       | 2019 | `flat()`, `fromEntries()`, `trimStart()` |
| ES11       | 2020 | Optional chaining, BigInt, `allSettled()` |
| ES12       | 2021 | `replaceAll()`, logical assignment, `Promise.any()` |
| ES13       | 2022 | Class fields, `.at()`, top-level `await` |

---

## 🔗 References
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Spec](https://tc39.es/)

