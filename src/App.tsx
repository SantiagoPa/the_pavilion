import { Grid } from "@mui/material";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { HomePage, ProductPage, ProductsPage } from "./pages";
import { Footer, Navbar } from "@/components";

const Layout = () => {
  return (
    <Grid>
      <Navbar />
      <Outlet />
      <Footer />
    </Grid>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
