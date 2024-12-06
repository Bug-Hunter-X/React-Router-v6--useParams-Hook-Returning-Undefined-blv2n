The correct way to use `useParams` is to ensure that the component calling it is a child of a route element.  Here's the corrected code:

```javascript
// Correct Usage
function MyComponent() {
  const params = useParams();
  console.log(params); // params will now contain route parameters
  return <div>My Component: {params.id}</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<MyComponent />}/>
      </Routes>
    </BrowserRouter>
  );
}
```
This ensures that `useParams` has access to the routing context and can correctly resolve the route parameters.