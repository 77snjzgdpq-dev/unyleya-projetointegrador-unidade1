
import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import QuemSomos from "./pages/quemsomos";
import Register from "./pages/register";
import SearchProducts from "./pages/search-result";
import "./styles.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserProduct from "./pages/user-product";
import FormProduct from "./pages/form-product";
import FaleConosco from "./pages/fale-conosco";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/products",
      element: <ListProducts />
    },
     {
      path: "/products/details",
      element: <Details />
    },
     {
      path: "/products/search",
      element: <SearchProducts />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "*",
      element: <NotFound />
    },
    {
      path: "/quemsomos",
      element: <QuemSomos />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
     {
      path: "/my-products",
      element: <UserProduct />
    },
     {
      path: "/form-products",
      element: <FormProduct />
    },
    {
      path: "/fale-conosco",
      element: <FaleConosco />
    },
  ]);

  return (
    <div className="min-h-screen">
       <RouterProvider router={router} />
    </div>
  );
}
