## Remove unnecessary useMemo/useCallback

```js
function ProductCard({ price }) {
  const tax = useMemo(() => price * 0.18, [price]);
  const logPrice = useCallback(() => console.log(price), [price]);

  return (
    <div>
      <h3>Price: {price}</h3>
      <button onClick={logPrice}>Log</button>
    </div>
  );
}
```

1) Assignment:

- Remove unnecessary memoization correctly in React 19+.
- Explain why React Compiler handles these cases.
- Identify when memoization is still required.

Answer:
see components/ProductCard.tsx
the new react compiler handles these cases by default, so we can remove the memoization.

Use Memorization when one of these following items are true:

- The function is computationally expensive.
- The code you pass it to expects the exact same reference later.
- You pass objects/functions to something that skips work based on ===.



## Lazy-load a country dropdown

Build a form with fields like:

- Name
- Email
- Country (dropdown with 250 countries)

Assignment:

- Move the CountrySelector into a separate lazy-loaded component.
- Show a custom loader (e.g., spinner).
- Measure initial bundle size vs lazy bundle size.




## Split a large context

You have a context:

```js
const AppContext = createContext({
  user: null,
  theme: "light",
  cart: [],
  locale: "en",
});
```

Any change in cart re-renders ALL consumers.

Assignment:

- Split into 3 contexts:
  - UserContext
  - ThemeContext
  - CartContext
- Update providers and consumers.
- Show improved render patterns with logs.
