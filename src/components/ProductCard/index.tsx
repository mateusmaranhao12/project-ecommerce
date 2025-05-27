import style from "./product-card.module.scss"

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

                <button>
                    Adicionar ao carrinho
                </button>
            </div>
        </div>
    )
}