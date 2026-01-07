import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/index";
import Products from "../Pages/Products";
import AboutUs from "../Pages/About_us";
import ContactUs from "../Pages/ContactUs";
import Layout from "../Pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Route>
      
    </>
  )
);

export default router;
