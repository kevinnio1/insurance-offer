export const getBelgianPrice = (price: number, decimals: number) => {
    return price.toLocaleString("nl-BE", {minimumFractionDigits: decimals, maximumFractionDigits: decimals})
}