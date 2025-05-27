import { CheckSquareOutlined, HomeOutlined } from "@ant-design/icons"
import style from "./success.module.scss"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/Button"

function Success() {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <CheckSquareOutlined className={style.icon} />
                <h1>Pagamento confirmado!</h1>
                <p>Obrigado por sua compra.</p>

                <div className={style.orderInfo}>
                    <h2>Resumo do Pedido</h2>
                    <div className={style.items}>
                        <div className={style.item}>
                            <img
                                src="https://conteudo.imguol.com.br/c/esporte/8f/2022/10/26/neymar-em-acao-com-a-camisa-da-selecao-do-brasil-1666821905607_v2_450x600.jpg"
                                alt="produto"
                            />
                            <div>
                                <div className={style.itemInfo}>
                                    <h3>Título</h3>
                                    <span>R$80,00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={style.total}>
                        <strong>Total:</strong>
                        <strong>R$100,00</strong>
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