import api from "../../services/api";
import type { FormProduct } from "./types";

export async function saveApiProduct(body: FormProduct, token: string) {
    return await api.post("/products", {
            name: body.name,
            manufacturer: body.manufacturer,
            category: body.category,
            price: body.price,
            url1: body.url1,
            url2: body.url2,
            description: body.description
        },
        {
            headers: {Authorization: token}
        }
    );
}