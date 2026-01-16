# Day 11 - Your Task

## A: Fix Broken Memoization

Take a look into this code:

```js
const Child = React.memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child onClick={() => console.log("Child clicked")} />
    </>
  );
}
```

Task:

- Make sure `<Child>` renders only once even after repeatedly clicking Increment.
- Explain why it was re-rendering before.
- Fix it using useCallback.


Answer to Task A: 
1 + 3) see RenderingOne.tsx
2) Explain
The child rerenders before, because the onClick prop is a new function on every render and React.memo only shallowly compares the props.
React.memo() uses === (strict equality) to compare props, so two different function objects are never equal even if they do the same thing


## B: Improve a Derived State Anti-Pattern

Code:

```js
const [filtered, setFiltered] = useState([]);

useEffect(() => {
  setFiltered(items.filter(i => i.active));
}, [items]);
```

Task: Replace it with the correct derived-state pattern.

Answer to Task B: 
const derivedState = items.filter(i => i.active);
or when more expensive:
const derivedState = useMemo(() => items.filter(i => i.active), [items]);


## C: Build a Small Dashboard

Build a small dashboard with a mini version of real-world React app (e-commerce, dashboards, admin panels).

- A search bar with debounce
- A scroll tracker with throttle
- Render a user list(10K) filtered by search(No derived state and with performance optimizations)
- Scroll position updates smoothly

Answer to Task C: 
see performance/dashboard/Dashboard.jsx

