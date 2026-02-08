# Context Split Implementation

This implementation demonstrates how to split a monolithic context into separate contexts to prevent unnecessary re-renders.

## Problem

When using a single context for multiple concerns (user, theme, cart), any change to one part of the state causes all consumers of that context to re-render, even if they only use a small portion of the state.

## Solution

Split the context into three separate contexts:
- **UserContext**: Manages user authentication state
- **ThemeContext**: Manages theme preferences
- **CartContext**: Manages shopping cart state

## Benefits

1. **Granular Re-renders**: Each component only re-renders when its specific context changes
2. **Better Performance**: Fewer unnecessary re-renders
3. **Clearer Separation of Concerns**: Each context has a single responsibility
4. **Easier Testing**: Each context can be tested independently

## Usage

### Providers

Wrap your app with the combined provider:

```tsx
import { AppProviders } from "./contexts/AppProviders";

function App() {
  return (
    <AppProviders>
      <YourApp />
    </AppProviders>
  );
}
```

### Consumers

Use the custom hooks to access each context:

```tsx
import { useUser } from "./contexts/UserContext";
import { useTheme } from "./contexts/ThemeContext";
import { useCart } from "./contexts/CartContext";

function MyComponent() {
  const { user, setUser } = useUser();
  const { theme, toggleTheme } = useTheme();
  const { cart, addToCart } = useCart();

  // ... component logic
}
```

## Testing the Implementation

1. Open the app in your browser
2. Open the browser console (F12)
3. Navigate to the Context Demo section
4. Click buttons in each context section
5. Observe the console logs - only the relevant component re-renders

### Expected Behavior

- Clicking "Add to Cart" → Only `CartDisplay` re-renders
- Clicking "Toggle Theme" → Only `ThemeDisplay` re-renders
- Clicking "Login" → Only `UserDisplay` re-renders

## Files Created

- `app/contexts/UserContext.tsx` - User authentication context
- `app/contexts/ThemeContext.tsx` - Theme management context
- `app/contexts/CartContext.tsx` - Shopping cart context
- `app/contexts/AppProviders.tsx` - Combined provider wrapper
- `app/Providers.tsx` - Client-side provider wrapper
- `app/components/ContextDemo/UserDisplay.tsx` - User context consumer
- `app/components/ContextDemo/ThemeDisplay.tsx` - Theme context consumer
- `app/components/ContextDemo/CartDisplay.tsx` - Cart context consumer
- `app/components/ContextDemo/page.tsx` - Demo page showing all contexts

## Key Concepts

### Context API

React Context provides a way to pass data through the component tree without having to pass props down manually at every level.

### Separate Contexts

By splitting concerns into separate contexts, we ensure that:
- Each context has a single responsibility
- Changes to one context don't affect consumers of other contexts
- Components only re-render when their specific context changes

### Custom Hooks

Custom hooks (`useUser`, `useTheme`, `useCart`) provide:
- Type-safe access to context values
- Error handling for missing providers
- Clean API for consumers

## Performance Comparison

### Before (Single Context)
```
Cart changes → All consumers re-render
Theme changes → All consumers re-render
User changes → All consumers re-render
```

### After (Split Contexts)
```
Cart changes → Only CartDisplay re-renders
Theme changes → Only ThemeDisplay re-renders
User changes → Only UserDisplay re-renders
```

This results in significantly fewer re-renders and better performance.
