import { lazy } from "react";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "",
    element: lazy(() => import("pages/HomeTemplate")),
    nested: [
      {
        path: "",
        element: lazy(() => import("pages/HomeTemplate/HomePage")),
      },
      {
        path: "about",
        element: lazy(() => import("pages/HomeTemplate/AboutPage")),
      },
      {
        path: "list-movie",
        element: lazy(() => import("pages/HomeTemplate/ListMoviePage")),
      },
      {
        path: "hooks",
        element: lazy(() => import("pages/HomeTemplate/HookPage")),
      },
      {
        path: "detail/:id",
        element: lazy(() => import("pages/HomeTemplate/DetailMoviePage")),
      },
    ],
  },
  {
    path: "admin",
    element: lazy(() => import("pages/AdminTemplate")),
    nested: [
      {
        path: "dashboard",
        element: lazy(() => import("pages/AdminTemplate/Dashboard")),
      },
      {
        path: "add-user",
        element: lazy(() => import("pages/AdminTemplate/AddUser")),
      },
    ],
  },
  {
    path: "login",
    element: lazy(() => import("pages/AdminTemplate/AuthPage")),
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    return (
      <Route key={route.path} path={route.path} element={<route.element />}>
        {route.nested &&
          route.nested.length &&
          route.nested.map((item) => {
            return (
              <Route
                key={item.path}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
      </Route>
    );
  });
};

export default renderRoutes;
