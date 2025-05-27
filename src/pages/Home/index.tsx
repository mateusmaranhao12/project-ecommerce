import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { ProductCard } from "../../components/ProductCard"
import style from "./home.module.scss"

function Home() {
    return (
        <div className={style.container}>
            <Header />

            <div className={style.banner}>
                <h1>E-commerce Developer</h1>
            </div>

            <div className={style.products}>
                <ProductCard
                    title="Camisa do Menino Ney"
                    description="Camisa 10 do Brasil do Neymar"
                    price={40}
                    imageUrl="https://conteudo.imguol.com.br/c/esporte/8f/2022/10/26/neymar-em-acao-com-a-camisa-da-selecao-do-brasil-1666821905607_v2_450x600.jpg"
                    id="1"
                    isInCart
                />
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
                <ProductCard
                    title="Camisa do Maradona"
                    description="Camisa 18 do Maradona"
                    price={90}
                    imageUrl="https://forbes.com.br/wp-content/uploads/2022/04/maradona.jpg"
                    id="4"
                />
            </div>

            <Footer />
        </div>
    )
}

export default Home