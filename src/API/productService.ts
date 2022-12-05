import axios from "axios";
import {IProduct, IProductCover} from "../types/productTypes";

interface params {
	sort?: string[],
	range?: number[],
	filter?: string
}

export class productService {
	static async getProducts(params: params = {}) {
		const response = await axios.get<IProduct[]>('https://test2.sionic.ru/api/Products', {params})
		return response
	}
	static async getCoverProduct(productId: number) {
		const response = await axios.get<IProductCover[]>(
			`https://test2.sionic.ru/api/ProductImages?filter={"product_id":${productId}}`
		);
		return response;
	}
	
}
