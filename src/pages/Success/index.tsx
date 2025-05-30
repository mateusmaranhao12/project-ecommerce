import { CheckSquareOutlined, HomeOutlined } from "@ant-design/icons"
import style from "./success.module.scss"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/Button"
import { useGlobalContext } from "../../context/global"
import useFormatter from "../../hooks/utils/use-formatter"

function Success() {

    const { saleResume } = useGlobalContext()
    const { formatMoney } = useFormatter()

    const total = saleResume?.products.reduce((acc, item) => acc + item.price, 0) ?? 0
    const formattedTotal = formatMoney(total)

    return (
        <div className={style.container}>
            <div className={style.content}>
                <CheckSquareOutlined className={style.icon} />
                <h1>Pagamento confirmado!</h1>
                <p>Obrigado por sua compra.</p>

                <div className={style.orderInfo}>
                    <h2>Resumo do Pedido</h2>
                    <div className={style.items}>
                        {saleResume?.products.map((product) => (
                            <div className={style.item} key={product.id}>
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                    loading="lazy"
                                />
                                <div>
                                    <div className={style.itemInfo}>
                                        <h3>{product.title}</h3>
                                        <span>{formatMoney(product.price)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={style.total}>
                        <strong>Total:</strong>
                        <strong>{formattedTotal}</strong>
                    </div>
                </div>

                <Link to="/">
                    <Button>
                        <HomeOutlined />
                        Voltar para Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Success