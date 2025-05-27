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

            <div>
                <ProductCard
                    title="Camisa do Menino Ney"
                    description="Camisa 10 do Brasil do Neymar"
                    price={40}
                    imageUrl="https://conteudo.imguol.com.br/c/esporte/8f/2022/10/26/neymar-em-acao-com-a-camisa-da-selecao-do-brasil-1666821905607_v2_450x600.jpg"
                    id="1"
                />
                <ProductCard
                    title="Camisa do Cristiano Ronaldo"
                    description="Camisa 7 do Portugal do Cristiano Ronaldo"
                    price={60}
                    imageUrl="https://p2.trrsf.com/image/fget/cf/1200/900/middle/images.terra.com/2020/09/08/2020-09-08t194527z2097967582rc2jui91sh3frtrmadp3soccer-uefanations-swe-por-report.JPG"
                    id="2"
                />
            </div>
        </div>
    )
}

export default Home