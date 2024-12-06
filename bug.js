In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This leads to `undefined` values for route parameters. For example:

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams(); // params will be undefined if not within a route component
  console.log(params);
  return <div>My Component</div>;
}
```

```javascript
<Routes>
  <Route path="/:id" element={<MyComponent />}/>
</Routes>
```