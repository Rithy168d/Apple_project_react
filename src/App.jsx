import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import  Home  from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <DetailProduct/>,
      },
      {
        path: "about",
        element: <h3>About</h3>,
      },
      {
        path: "services",
        element: <h3>Services</h3>,
      },
      {
        path: "products",
        element: <h3>Products</h3>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
