import axios from "axios";
import {params} from "../types/apiTypes";
import {IProductVariation} from "../types/productTypes";

export class variationService {

	static async getProductVariation(params: params = {}) {
		const response = await axios.get<IProductVariation[]>('https://test2.sionic.ru/ProductVariations', {params})
		return response
	}

}
