
import Dashboard from "./pages/dashboard";
import Details from "./pages/details";
import Home from "./pages/home";
import Login from "./pages/login";
import NotFound from "./pages/not-found";
import QuemSomos from "./pages/quemsomos";
import Register from "./pages/register";
import SearchProducts from "./pages/search-result";
import "./styles.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserProduct from "./pages/user-products";
import FormProduct from "./pages/form-product";
import FaleConosco from "./pages/fale-conosco";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListRecentsProducts from "./pages/list-recents-products";
import ListAllProducts from "./pages/list-all-products";
import { ToastContainer } from "react-toastify";
import FormProductEdit from "./pages/form-product-edit";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/all-recents-products",
      element: <ListRecentsProducts />
    },
     {
      path: "/products/details/:id",
      element: <Details />
    },
     {
      path: "/products/search/:product",
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
      path: "/list-recents-products",
      element: <ListRecentsProducts />
    },
     {
      path: "/form-product",
      element: <FormProduct />
    },
    {
      path: "/form-product-edit/:id",
      element: <FormProductEdit />
    },
    {
      path: "/fale-conosco",
      element: <FaleConosco />
    },
    {
      path: "/list-all-products",
      element: <ListAllProducts />
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },
    {
      path: "/reset-password/:token",
      element: <ResetPassword />
    },
    
  ]);

  return (
    <div>
      <div className="min-h-screen">
        <RouterProvider router={router} />
      </div>
      <div>
        <ToastContainer position="top-right"
                        autoClose={3000}/>
        </div>
    </div>
  );
}
