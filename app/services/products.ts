import { fetchData } from "./api";

export async function getProducts() {
  return fetchData(`products`);
}
