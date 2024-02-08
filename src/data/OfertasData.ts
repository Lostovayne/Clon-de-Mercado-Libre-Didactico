export interface OfertaProps {
    id: number;
    imagen: string;
    title: string;
    descount: number;
    price: number;
}

export const OfertaData: OfertaProps[] = [
    {
        id: 1,
        imagen: "./Ofertas-products/oferta1.webp",
        title: "Ventilador de mesa/de pie Somela Wind Breeze 2 en 1 negro con 5 aspas color gris, 16",
        descount: 72990,
        price: 45990,
    },
    {
        id: 2,
        imagen: "./Ofertas-products/oferta2.webp",
        title: "Refrigerador Mademsa MED165 inox con freezer 166L 220V",
        descount: 119990,
        price: 79990,
    },
    {
        id: 3,
        imagen: "./Ofertas-products/oferta3.webp",
        title: "Minibar Mademsa 90l Black Inox Look Mmb 91",
        descount: 69990,
        price: 49990,
    },
    {
        id: 4,
        imagen: "./Ofertas-products/oferta4.webp",
        title: "Xiaomi Redmi 13C Dual SIM 256 GB midnight black 8 GB RAM",
        descount: 79990,
        price: 59990,
    },
    {
        id: 5,
        imagen: "./Ofertas-products/oferta5.webp",
        title: "Cargador Portátil Externa Laptop Master G 20000 Mah Pd 65w Quick Charge",
        descount: 65990,
        price: 29990,
    },
];
