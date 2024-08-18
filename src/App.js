import { app } from "./auth/firebase-config";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
}

export default App;
