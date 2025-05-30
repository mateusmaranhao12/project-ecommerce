import { ProductCard } from "../../components/ProductCard"
import { useGlobalContext } from "../../context/global"
import style from "./home.module.scss"

function Home() {

    const { productList } = useGlobalContext()

    return (
        <div className={style.container}>

            <div className={style.banner}>
                <h1>E-commerce Developer</h1>
            </div>

            <div className={style.products}>

                {productList?.map((product) => (

                    <ProductCard
                        key={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        id={product.id}
                        isInCart={product.isInCart}
                    />

                ))}
            </div>

        </div>
    )
}

export default Home