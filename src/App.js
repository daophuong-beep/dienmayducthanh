

import React from "react"
// import Home from "./pages/Home"
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import "./css/product.css";
import './css/site.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home";
import FilterPage from "./pages/FilterProductPage/FilterPage";
import { Footer, Header } from "./components/layouts";
const router = createBrowserRouter([
  {
    path: "/:catagory/:subCatagory/:code",
    element: <DetailProduct />
    // element: <Home />
  },
  {
    path: "/",
    element: <Home />
  },
  // {
  //   path: "/:catagory",
  //   element: <FilterPage />
  // },
  // {
  //   path: "/:catagory/:subCatagory",
  //   element: <FilterPage />
  // }
 

]);


function App() {
  



  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
