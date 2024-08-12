import { lazy, Suspense } from "react";
import { createBrowserRouter, useRouteError } from "react-router-dom";

const LoginForm = lazy(() => import("./auth/LoginIndex"));
const BrowseIndex = lazy(() => import("./browse/BrowseIndex"));

const ErrorElement = () => {
  const error = useRouteError();
  console.log("error", error);
  return <h1>Page not found</h1>;
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<>Loading</>}>
        <LoginForm />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<>Loading</>}>
        <LoginForm />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
  },
  {
    path: "/Browse",
    element: (
      <Suspense fallback={<>Loading</>}>
        <BrowseIndex />
      </Suspense>
    ),
    errorElement: <ErrorElement />,
  },
]);
