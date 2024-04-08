import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Error from "./pages/Error";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/AdminDasboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import ProductPage from "./pages/ProductPage";
import Search from "./components/Search";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Profie from "./pages/user/Profie";
import Orders from "./pages/user/Orders";
import AdminOrders from "./pages/admin/AdminOrders";
import ApplyDoctor from "./pages/user/ApplyDoctor";
import AllDoctors from "./pages/user/AllDoctors";
import Appointments from "./pages/user/Appointments";
import AllUsers from "./pages/admin/AllUsers";
import AllDoctorsAdmin from "./pages/admin/AllDoctorsAdmin";
import DoctorAppointmentBooking from "./pages/DoctorAppointmentBooking";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profie />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/my-appointments" element={<Appointments />} />
          <Route path="user/apply-doctor" element={<ApplyDoctor />} />
          <Route path="user/all-doctors" element={<AllDoctors />} />
          <Route
            path="user/book-appointment/:doctorId"
            element={<DoctorAppointmentBooking />}
          />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/orders" element={<AdminOrders />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/all-users" element={<AllUsers />} />
          <Route path="admin/all-doctors" element={<AllDoctorsAdmin />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
