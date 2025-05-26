import Header from "../../components/Header"
import style from "./home.module.scss"

function Home() {
    return (
        <div className={style.container}>
            <Header />
            <h1>Home</h1>
        </div>
    )
}

export default Home