import type { AxiosResponse } from "axios";
import api from "../../services/api";
import type { Product } from "./types";

export async function getApiAllProductsOrdered(typeOrder: "descending" | "ascending"): Promise<AxiosResponse<Product[]>> {
    return await api.get(`/products?order=${typeOrder}`);
}

export async function getApiAllProducts() : Promise<AxiosResponse<Product[], any>> {
  return await api.get("/products");
}