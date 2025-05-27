import { Link } from "react-router-dom"
import { Button } from "../../components/ui/Button"
import style from "./cart.module.scss"
import { CloseCircleOutlined } from "@ant-design/icons"

function Cart() {

    const emptyCart = false

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
                        <div className={style.cartItem}>
                            <Link to="product/1" className={style.productInfo}>
                                <img
                                    src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/12/18/675x450/1_000_334p8ak-27076446.jpg?20221218154146?20221218154146"
                                    alt="product"
                                />

                                <div>
                                    <h3>Titulo do produto</h3>
                                    <p>Descrição do produto</p>
                                    <span className={style.price}>
                                        60,00
                                    </span>
                                </div>
                            </Link>

                            <button className={style.removeButton}>
                                <CloseCircleOutlined />
                            </button>
                        </div>
                        <div className={style.cartItem}>
                            <Link to="product/1" className={style.productInfo}>
                                <img
                                    src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/12/18/675x450/1_000_334p8ak-27076446.jpg?20221218154146?20221218154146"
                                    alt="product"
                                />

                                <div>
                                    <h3>Titulo do produto</h3>
                                    <p>Descrição do produto</p>
                                    <span className={style.price}>
                                        60,00
                                    </span>
                                </div>
                            </Link>

                            <button className={style.removeButton}>
                                <CloseCircleOutlined />
                            </button>
                        </div>
                        <div className={style.cartItem}>
                            <Link to="product/1" className={style.productInfo}>
                                <img
                                    src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/12/18/675x450/1_000_334p8ak-27076446.jpg?20221218154146?20221218154146"
                                    alt="product"
                                />

                                <div>
                                    <h3>Titulo do produto</h3>
                                    <p>Descrição do produto</p>
                                    <span className={style.price}>
                                        60,00
                                    </span>
                                </div>
                            </Link>

                            <button className={style.removeButton}>
                                <CloseCircleOutlined />
                            </button>
                        </div>
                    </div>

                    <div className={style.summary}>
                        <h2>Resumo do pedido</h2>

                        <div className={style.summaryContent}>
                            <div className={style.summaryItem}>
                                <span>Subtotal</span>
                                <span>100,00</span>
                            </div>
                            <div className={style.summaryItem}>
                                <span>Frete</span>
                                <span>Grátis</span>
                            </div>
                            <div className={style.summaryTotal}>
                                <span>Total</span>
                                <span>100,00</span>
                            </div>

                            <Button>Finalizar pedido</Button>

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