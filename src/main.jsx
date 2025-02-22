import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./routes/contact";
import { action as destroyAction } from "./routes/destroy";
import EditContact, { action as editAction } from "./routes/edit";
import Index from "./routes/index";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/React-Router-Tutorial/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="/React-Router-Tutorial/contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="/React-Router-Tutorial/contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="/React-Router-Tutorial/contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
