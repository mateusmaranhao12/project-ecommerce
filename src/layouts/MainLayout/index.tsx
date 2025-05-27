import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import style from './main-layout.module.scss'

export default function MainLayout() {
    return (
        <div className={style.container}>
            <Header />
            <div className={style.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}