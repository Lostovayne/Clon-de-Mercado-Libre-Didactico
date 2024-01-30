export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string[];
    rate: number;
}

export interface Store {
    id: number;
    name: string;
    products: Product[];
    image: string;
    sales: number;
}
