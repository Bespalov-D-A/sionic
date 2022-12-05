import axios from "axios";
import {ICategory} from "../types/productTypes";

export class categoryService {
	static async getAllCategories() {
		const response = await axios.get<ICategory>('https://test2.sionic.ru/api/Categories/') 
		return response 
	}
}
