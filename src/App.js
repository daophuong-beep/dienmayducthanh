

import React from "react"
// import Home from "./pages/Home"
import DetailProduct from "./pages/DetailProduct/DetailProduct";

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home";
const router = createBrowserRouter([
  {
    path: "/:catagory/:subCatagory/:code",
    element: <DetailProduct />
    // element: <Home />
  },
  {
    path: "/",
    element: <Home />
  }

]);


function App() {
  



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
