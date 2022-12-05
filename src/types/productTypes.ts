export interface ICategory {
  id: number;
  name: string;
}

export interface IProductCover {
	id: number;
	product_id: number;
	image_name: string;
	image_url: string;
}

export interface IProduct {
  id: number;
  category_id: number;
  name: string;
  description: string;
}
