import { CloseOutlined, PlusCircleFilled } from "@ant-design/icons"
import { Button } from "../../components/ui/Button"
import style from "./product.module.scss"
import { ProductCard } from "../../components/ProductCard"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../../context/global"
import useFormatter from "../../hooks/utils/use-formatter"

function Product() {

    const { id } = useParams()

    const { productList, addToCart, removeFromCart } = useGlobalContext()
    const { formatMoney } = useFormatter()

    const currentProduct = productList.find((product) => product.id === id)
    const relatedProducts = productList.filter((p) => p.id !== id).slice(0, 4)

    const isInCart = currentProduct?.isInCart

    function handleCartAction() {
        if (!currentProduct) return

        if (isInCart) {
            removeFromCart(currentProduct.id)
            return
        }

        addToCart(currentProduct.id)
    }

    return (
        <div className={style.container}>
            <div className={style.product}>
                <div className={style.imageContainer}>
                    <img src={currentProduct?.imageUrl} alt={currentProduct?.title} />
                </div>

                <div className={style.info}>
                    <h1>{currentProduct?.title}</h1>
                    <p className={style.description}>{currentProduct?.description}</p>
                    <span className={style.price}>{formatMoney(currentProduct?.price ?? 0)}</span>

                    <div className={style.details}>
                        <h2>Descrição</h2>
                        <p>{currentProduct?.detailedDescription}</p>

                        <ul>
                            <li>Garantia de 12 meses</li>
                            <li>Frete grátis para todo o Brasil</li>
                            <li>Produto original com nota fiscal</li>
                        </ul>
                    </div>

                    <div className={style.actions}>
                        <Button variant={isInCart ? 'danger' : 'primary'} onClick={handleCartAction}>
                            {isInCart ?

                                <>
                                    <CloseOutlined />
                                    Remover do carrinho
                                </>
                                :
                                <>
                                    <PlusCircleFilled />
                                    Adicionar ao carrinho
                                </>
                            }
                        </Button>
                    </div>
                </div>
            </div>

            <div className={style.relatedProducts}>
                <h2>Produtos relacionados</h2>

                <div className={style.carousel}>

                    {relatedProducts.map((product) => (
                        <ProductCard
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            id={product.id}
                            key={product.id}
                            isInCart={product.isInCart}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product