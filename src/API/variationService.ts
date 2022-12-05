import axios from "axios";
import { params } from "../types/apiTypes";
import {
	IProductVariation,
	IProductVariationProperties,
	IProductVariationPropertyListValues,
	IProductVariationPropertyValues,
} from "../types/productTypes";

export class variationService {
	static async getProductVariation(params: params = {}) {
		const response = await axios.get<IProductVariation[]>(
			"https://test2.sionic.ru/ProductVariations",
			{ params }
		);
		return response;
	}

	static async getProductVariationProperties(params: params = {}) {
		const response = await axios.get<IProductVariationProperties[]>(
			"https://test2.sionic.ru/ProductVariationProperties",
			{ params }
		);
		return response;
	}

	static async getProductVariationPropertyListValues(params: params = {}) {
		const response = await axios.get<IProductVariationPropertyListValues[]>(
			"https://test2.sionic.ru/ProductVariationPropertyListValues",
			{ params }
		);
		return response;
	}

		static async getProductVariationPropertyValues(params: params = {}) {
		const response = await axios.get<IProductVariationPropertyValues[]>(
			"https://test2.sionic.ru/ProductVariationPropertyValues",
			{ params }
		);
		return response;
	}

}
