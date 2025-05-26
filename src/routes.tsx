import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Success from "./pages/Success"

function MainRoutes() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Cart />} path="/cart" />
            <Route element={<Product />} path="/product/:id" />
            <Route element={<Success />} path="/success" />
        </Routes>
    )
}

export default MainRoutes