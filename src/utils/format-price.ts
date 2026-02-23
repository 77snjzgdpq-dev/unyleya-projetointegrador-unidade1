export function formatPrice(price: number) {
    if(!price)
    {
        return "";
    }

    const formatPrice = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(price);
    
    return formatPrice;
}

