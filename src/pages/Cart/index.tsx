import { Link } from "react-router-dom"
import { Button } from "../../components/ui/Button"
import style from "./cart.module.scss"
import { CloseCircleOutlined } from "@ant-design/icons"
import { useGlobalContext } from "../../context/global"
import useFormatter from "../../hooks/utils/use-formatter"

function Cart() {

    const { cart, removeFromCart, addCheckout } = useGlobalContext()
    const { formatMoney } = useFormatter()

    const total = cart.reduce((acc, item) => acc + item.price, 0)
    const formattedTotal = formatMoney(total)

    const emptyCart = Boolean(!cart.length)

    return (
        <div className={style.container}>
            <h1>Carrinho de Compras</h1>

            {emptyCart ?

                <div className={style.emptyCart}>
                    <p>Seu carrinho está vazio</p>
                    <Link to="/">
                        <Button>Continuar comprando</Button>
                    </Link>
                </div>
                :
                <div className={style.content}>
                    <div className={style.cartItems}>
                        {cart.map((product) => (
                            <div className={style.cartItem}>
                                <Link to={`/product/${product.id}`} className={style.productInfo}>
                                    <img
                                        src={product.imageUrl}
                                        alt={product.title}
                                        loading="lazy"
                                    />

                                    <div>
                                        <h3>{product.title}</h3>
                                        <p>{product.description}</p>
                                        <span className={style.price}>
                                            {formatMoney(product.price)}
                                        </span>
                                    </div>
                                </Link>

                                <button className={style.removeButton} onClick={() => removeFromCart(product.id)}>
                                    <CloseCircleOutlined />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className={style.summary}>
                        <h2>Resumo do pedido</h2>

                        <div className={style.summaryContent}>
                            <div className={style.summaryItem}>
                                <span>Subtotal</span>
                                <span>{formattedTotal}</span>
                            </div>
                            <div className={style.summaryItem}>
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>
                            <div className={style.summaryTotal}>
                                <span>Total</span>
                                <span>{formattedTotal}</span>
                            </div>

                            <Button onClick={() => addCheckout()}>Finalizar pedido</Button>

                            <Link to="/">
                                <Button variant="secondary" fullWidth>Continuar comprando</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart