import { deliveryFormState } from "../store/slices/deliveryFormSlice";

export interface IReadyOrder {
	delivery: IDeliveryFormValues;
	product: IProductInCart;
	paid: boolean
	date: string
	orderId: string
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
