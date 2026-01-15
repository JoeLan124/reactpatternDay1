# Performance Dashboard

A small MVP dashboard demonstrating performance optimization techniques in React.

## Features

### 1. Search Bar with Debounce
- Uses the `useDebounce` hook to delay search queries
- Prevents excessive filtering while typing
- 500ms delay before filtering is applied

### 2. Scroll Tracker with Throttle
- Uses the `useThrottle` hook to limit scroll event updates
- Updates scroll position at most every 100ms
- Smooth visual feedback with progress bar

### 3. User List with Performance Optimizations
- Displays 10 dummy users (instead of 10K as per requirements)
- Filters users based on search query (name or email)
- Uses `useMemo` for derived state (correct pattern)
- Uses `React.memo` for individual user items to prevent unnecessary re-renders

## Performance Techniques Demonstrated

1. **Debouncing**: Delays expensive operations until user stops typing
2. **Throttling**: Limits how frequently scroll events trigger updates
3. **Memoization**: 
   - `useMemo` for derived state (filtered users)
   - `React.memo` for individual user items
4. **Key Props**: Proper use of `key` prop for efficient list rendering

## Usage

The dashboard is accessible at the root path `/` and includes:

- A search input that filters the user list
- A scroll tracker that shows current scroll position
- A list of users that updates based on search
- Placeholder content to enable scrolling

## Code Structure

```
dashboard/
├── Dashboard.jsx       # Main dashboard component
└── README.md          # This file
```

## Dependencies

- React hooks: `useState`, `useEffect`, `useMemo`, `memo`
- Custom hooks: `useDebounce`, `useThrottle`
- Tailwind CSS for styling
