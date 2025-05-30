import { Link } from "react-router-dom"
import style from "./header.module.scss"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { useGlobalContext } from "../../context/global"

function Header() {

    const { cart } = useGlobalContext()

    return (
        <header className={style.container}>
            <Link className={style.headerTitle} to="/">
                <strong>E-commerce Developer</strong>
            </Link>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart" className={style.cartLink}>
                    <span>Carrinho</span>
                    <div className={style.cartIconContainer}>
                        <ShoppingCartOutlined />

                        {cart.length > 0 && (
                            <span className={style.cartBadge}>
                                {cart.length}
                            </span>
                        )}
                    </div>
                </Link>
            </nav>
        </header>
    )

}

export default Header