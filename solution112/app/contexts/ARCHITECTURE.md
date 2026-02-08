# Context Split Architecture

## Component Tree

```
App
└── Providers (AppProviders)
    ├── UserProvider
    │   └── UserContext
    ├── ThemeProvider
    │   └── ThemeContext
    └── CartProvider
        └── CartContext
            └── Your App Components
                ├── UserDisplay (uses useUser)
                ├── ThemeDisplay (uses useTheme)
                └── CartDisplay (uses useCart)
```

## Data Flow

### User Context Flow

```
UserProvider
    ↓
UserContext (value: { user, setUser })
    ↓
useUser() hook
    ↓
UserDisplay component
```

### Theme Context Flow

```
ThemeProvider
    ↓
ThemeContext (value: { theme, toggleTheme })
    ↓
useTheme() hook
    ↓
ThemeDisplay component
```

### Cart Context Flow

```
CartProvider
    ↓
CartContext (value: { cart, addToCart, removeFromCart, clearCart })
    ↓
useCart() hook
    ↓
CartDisplay component
```

## Re-render Propagation

### Single Context (Before)

```
┌─────────────────────────────────────┐
│         AppContext                 │
│  { user, theme, cart, ... }        │
└──────────────┬──────────────────────┘
               │
               │ Any change
               ↓
    ┌──────────┴──────────┐
    ↓                     ↓
UserDisplay          ThemeDisplay
(renders)             (renders)
    ↑                     ↑
    └──────────┬──────────┘
               ↓
         CartDisplay
         (renders)
```

**Problem**: Any change to any part of the context triggers ALL consumers.

### Split Contexts (After)

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│UserContext  │  │ThemeContext │  │CartContext  │
│{user, setUser}│ │{theme, toggleTheme}│ │{cart, ...}│
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       │ user change    │ theme change   │ cart change
       ↓                ↓                ↓
┌──────┴──────┐  ┌──────┴──────┐  ┌──────┴──────┐
│UserDisplay  │  │ThemeDisplay │  │CartDisplay  │
│(renders)    │  │(renders)    │  │(renders)    │
└─────────────┘  └─────────────┘  └─────────────┘
```

**Solution**: Each context only affects its own consumers.

## Provider Composition

```tsx
// AppProviders.tsx
export function AppProviders({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
```

## Context Structure

### UserContext

```tsx
type User = {
  name: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};
```

### ThemeContext

```tsx
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
```

### CartContext

```tsx
type CartItem = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};
```

## Hook Usage

```tsx
// In components
import { useUser } from "./contexts/UserContext";
import { useTheme } from "./contexts/ThemeContext";
import { useCart } from "./contexts/CartContext";

function MyComponent() {
  const { user, setUser } = useUser();
  const { theme, toggleTheme } = useTheme();
  const { cart, addToCart } = useCart();

  // Component logic
}
```

## Error Handling

Each custom hook includes error handling:

```tsx
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
```

This ensures:
- Type safety
- Clear error messages
- Early detection of missing providers

## Performance Characteristics

### Memory Usage

- **Single Context**: One context object, but all consumers subscribe to it
- **Split Contexts**: Three context objects, but each consumer only subscribes to one

### Re-render Frequency

- **Single Context**: O(n) re-renders per change (n = number of consumers)
- **Split Contexts**: O(1) re-renders per change (only affected consumers)

### Scalability

As the app grows:

| Consumers | Single Context Re-renders | Split Contexts Re-renders |
|-----------|---------------------------|---------------------------|
| 3         | 3                         | 1                         |
| 10        | 10                        | 1                         |
| 100       | 100                       | 1                         |

## Migration Path

To migrate from single to split contexts:

1. **Identify concerns**: Group related state together
2. **Create separate contexts**: One per concern
3. **Create custom hooks**: For type-safe access
4. **Update providers**: Wrap with new providers
5. **Update consumers**: Replace old context usage with new hooks
6. **Test**: Verify re-render behavior with console logs
7. **Remove old context**: Once migration is complete

## Summary

The split context architecture provides:
- ✅ Better performance through granular re-renders
- ✅ Clearer separation of concerns
- ✅ Easier testing and maintenance
- ✅ Better scalability as the app grows
- ✅ Type-safe access through custom hooks
