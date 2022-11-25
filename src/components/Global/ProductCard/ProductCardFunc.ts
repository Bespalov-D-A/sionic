interface IimageObj {
	id: number;
	product_id: number;
	image_name: string;
	image_url: string;
}

export const getUrl = (obj: IimageObj) => {
	console.log(obj.image_url)	
}
