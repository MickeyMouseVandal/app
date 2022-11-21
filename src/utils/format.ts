export const formatPrice = (price: number) => {
    const formater = new Intl.NumberFormat('pt-br', {
        currency: 'BRL',
        style: 'currency'
    })
    return formater.format(price)
}