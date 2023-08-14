import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
