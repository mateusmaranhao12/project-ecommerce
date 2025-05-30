import React from "react"
import { useGlobalContext } from "../../context/global"
import { Button } from "../ui/Button"
import style from "./product-card.module.scss"
import { CloseOutlined, PlusCircleFilled } from '@ant-design/icons'
import useFormatter from "../../hooks/utils/use-formatter"
import { useNavigate } from "react-router-dom"

interface ProductCardProps {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
    isInCart?: boolean
}

export function ProductCard({
    id,
    title,
    description,
    price,
    imageUrl,
    isInCart

}: ProductCardProps) {

    const {addToCart, removeFromCart} = useGlobalContext()
    const {formatMoney} = useFormatter()
    const navigate = useNavigate()

    function handleCartAction(event: React.MouseEvent) {
        event?.stopPropagation()

        if(isInCart){
            removeFromCart(id)
            return
        }
        addToCart(id)
    }

    return (
        <div 
            className={style.productCard}
            onClick={() => navigate(`/product/${id}`)}
        >
            <img
                src={imageUrl}
                alt={title}
                className={style.productImage}
                loading="lazy"
            />

            <div className={style.productInfo}>
                <div className={style.content}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className={style.price}>{formatMoney(price)}</span>
                </div>

                <Button onClick={handleCartAction} variant={ isInCart ? 'danger' : 'primary' }>
                    {isInCart ?

                        <>
                            <CloseOutlined/>
                            Remover do carrinho
                        </>
                         : 
                         <>
                            <PlusCircleFilled/>
                            Adicionar ao carrinho
                         </>
                    }
                </Button>
            </div>
        </div>
    )
}