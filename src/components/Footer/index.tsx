import style from "./footer.module.scss"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <strong>E-commerce Developer</strong>
                <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}