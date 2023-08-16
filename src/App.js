import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Root from "./routes/Root";
import Error from "./routes/Error";
import ProductDetails from "./routes/ProductDetails";
import classes from './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
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
      {
        path: "/products/:id",
        element: <ProductDetails />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
