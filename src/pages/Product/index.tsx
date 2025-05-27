import { CloseOutlined, PlusCircleFilled } from "@ant-design/icons"
import { Button } from "../../components/ui/Button"
import style from "./product.module.scss"
import { ProductCard } from "../../components/ProductCard"

function Product() {

    const isInCart = false

    return (
        <div className={style.container}>
            <div className={style.product}>
                <div className={style.imageContainer}>
                    <img src="https://conteudo.imguol.com.br/c/esporte/8f/2022/10/26/neymar-em-acao-com-a-camisa-da-selecao-do-brasil-1666821905607_v2_450x600.jpg" alt="product" />
                </div>

                <div className={style.info}>
                    <h1>Nome do produto</h1>
                    <p className={style.description}>Minha descrição</p>
                    <span className={style.price}>R$500,00</span>

                    <div className={style.details}>
                        <h2>Descrição</h2>
                        <p>Descrição detalhada do produto.</p>

                        <ul>
                            <li>Garantia de 12 meses</li>
                            <li>Frete grátis para todo o Brasil</li>
                            <li>Produto original com nota fiscal</li>
                        </ul>
                    </div>

                    <div className={style.actions}>
                        <Button variant={isInCart ? 'danger' : 'primary'}>
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
                    <ProductCard
                        title="Camisa do CR7"
                        description="Camisa do Cristiano Ronaldo"
                        price={60}
                        imageUrl="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2020/09/08/2020-09-08t194527z2097967582rc2jui91sh3frtrmadp3soccer-uefanations-swe-por-report.JPG"
                        id="2"
                    />
                    <ProductCard
                        title="Camisa do Messi"
                        description="Camisa 10 do Messi"
                        price={50}
                        imageUrl="https://midias.correiobraziliense.com.br/_midias/jpg/2022/12/18/675x450/1_000_334p8ak-27076446.jpg?20221218154146?20221218154146"
                        id="3"
                    />
                    <ProductCard
                        title="Camisa do MBappe"
                        description="Camisa 10 da França do MBappe"
                        price={80}
                        imageUrl="https://s2-oglobo.glbimg.com/L-z2M-JGChPrcXvFvzYpv8xoct0=/0x0:3881x2587/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/e/f/g15q9fRU6xutSRbv4vDg/101415692-topshot-frances-forward-10-kylian-mbappe-celebrates-scoring-his-teams-second-goal.jpg"
                        id="4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Product