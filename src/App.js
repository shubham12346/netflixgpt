import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";
function App() {
  return (
    <div className="App">
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default App;
