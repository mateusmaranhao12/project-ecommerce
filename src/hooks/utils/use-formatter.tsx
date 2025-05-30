export default function useFormatter() {

    function formatMoney(value: number) {
        return new Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
        }).format(value)
    }

    return {
        formatMoney
    }

}