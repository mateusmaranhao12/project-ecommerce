import { Button } from "../ui/Button"
import style from "./product-card.module.scss"
import { PlusCircleFilled } from '@ant-design/icons'

interface ProductCardProps {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
}

export function ProductCard({
    title,
    description,
    price,
    imageUrl

}: ProductCardProps) {
    return (
        <div className={style.productCard}>
            <img
                src={imageUrl}
                alt={title}
                className={style.productImage}
            />

            <div className={style.productInfo}>
                <div className={style.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={style.price}>R${price}</span>
                </div>

                <Button variant="primary">
                    <PlusCircleFilled />
                    Adicionar ao Carrinho
                </Button>
            </div>
        </div>
    )
}