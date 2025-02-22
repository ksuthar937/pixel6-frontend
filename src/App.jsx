import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ClientsDetails from "./pages/ClientsDetails";
import ClientsList from "./pages/ClientsList";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="client-list" element={<ClientsList />} />
        <Route path="client-list/details/:id" element={<ClientsDetails />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
