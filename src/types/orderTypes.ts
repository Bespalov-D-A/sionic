import { deliveryFormState } from "../store/slices/deliveryFormSlice";

export interface IReadyOrder {
	products: IProductInCart[],
	delivery: IDeliveryFormValues;
	paid: boolean,
	date: string,
	orderId: string,
		productCount: number,
		cartTotal: number
}

export interface IDeliveryFormValues extends deliveryFormState {
	[key: string]: any;
}

export interface IProductInCart {
	id: string;
	category_id?: number;
	cover: string;
	description: string;
	itemTotal?: 652;
	name: string;
	original_product_id: number;
	price: number;
	quantity?: number;
	selected_variation_id: number;
}
