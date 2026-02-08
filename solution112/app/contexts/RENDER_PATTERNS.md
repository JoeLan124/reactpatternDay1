# Render Patterns Analysis

## Console Log Output

When you interact with the Context Demo, you'll see console logs showing which components re-render.

### Example Console Output

```
ContextDemo rendered
UserDisplay rendered
ThemeDisplay rendered
CartDisplay rendered
```

### After Clicking "Add to Cart"

```
CartDisplay rendered
```

**Notice**: Only `CartDisplay` re-renders. `UserDisplay` and `ThemeDisplay` do NOT re-render.

### After Clicking "Toggle Theme"

```
ThemeDisplay rendered
```

**Notice**: Only `ThemeDisplay` re-renders. `UserDisplay` and `CartDisplay` do NOT re-render.

### After Clicking "Login"

```
UserDisplay rendered
```

**Notice**: Only `UserDisplay` re-renders. `ThemeDisplay` and `CartDisplay` do NOT re-render.

## Render Count Comparison

### Single Context Approach (Before)

| Action | UserDisplay | ThemeDisplay | CartDisplay | Total Re-renders |
|--------|-------------|--------------|-------------|------------------|
| Add to Cart | ✅ | ✅ | ✅ | 3 |
| Toggle Theme | ✅ | ✅ | ✅ | 3 |
| Login | ✅ | ✅ | ✅ | 3 |

### Split Context Approach (After)

| Action | UserDisplay | ThemeDisplay | CartDisplay | Total Re-renders |
|--------|-------------|--------------|-------------|------------------|
| Add to Cart | ❌ | ❌ | ✅ | 1 |
| Toggle Theme | ❌ | ✅ | ❌ | 1 |
| Login | ✅ | ❌ | ❌ | 1 |

## Performance Improvement

- **67% reduction** in unnecessary re-renders
- Each action now triggers only 1 re-render instead of 3
- Components only re-render when their specific context changes

## Why This Matters

### 1. CPU Usage
Fewer re-renders means less CPU work, especially important for:
- Mobile devices
- Low-end computers
- Complex components with expensive calculations

### 2. User Experience
- Faster response times
- Smoother interactions
- Better perceived performance

### 3. Scalability
As your app grows with more contexts and consumers:
- Single context: Re-renders grow exponentially
- Split contexts: Re-renders stay constant per context

## Code Comparison

### Single Context (Problematic)

```tsx
// All state in one context
const AppContext = createContext({
  user: null,
  theme: 'light',
  cart: [],
  setUser: () => {},
  setTheme: () => {},
  setCart: () => {},
});

// Any change triggers ALL consumers
function UserDisplay() {
  const { user } = useContext(AppContext);
  console.log("UserDisplay rendered");
  // Re-renders even when cart or theme changes!
}
```

### Split Contexts (Optimized)

```tsx
// Separate contexts
const UserContext = createContext({ user: null, setUser: () => {} });
const ThemeContext = createContext({ theme: 'light', setTheme: () => {} });
const CartContext = createContext({ cart: [], setCart: () => {} });

// Each consumer only re-renders when its context changes
function UserDisplay() {
  const { user } = useContext(UserContext);
  console.log("UserDisplay rendered");
  // Only re-renders when user changes!
}
```

## Best Practices

1. **Split contexts by concern**: Group related state together
2. **Keep contexts focused**: Each context should have a single responsibility
3. **Use custom hooks**: Provide type-safe access to context values
4. **Add console logs**: Monitor re-renders during development
5. **Profile performance**: Use React DevTools Profiler to measure impact

## When to Split Contexts

Consider splitting when:
- Context has multiple unrelated concerns
- Consumers only use a subset of the context
- Performance issues arise from unnecessary re-renders
- Context becomes large and complex

## When to Keep Context Together

Keep context together when:
- State is tightly coupled
- Changes always affect all consumers
- Context is small and simple
- Performance is not a concern
