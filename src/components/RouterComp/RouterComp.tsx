import { FC } from "react";
import {
	Navigate,
	useRoutes,
} from "react-router-dom";
import Cart from "../Content/Cart/Cart";
import Delivery from "../Content/Delivery/Delivery";
import HistoryOrders from "../Content/HistoryOrders/HistoryOrders";
import Shop from "../Content/Shop/Shop";

const RouterComp: FC = () => {
	const routeElement = useRoutes([
		{ path: "/", element: <Navigate replace to="/shop" /> },
		{ path: "/cart", element: <Cart /> },
		{ path: "/delivery", element: <Delivery /> },
		{ path: "/history", element: <HistoryOrders /> },
		{ path: "/shop", element: <Shop /> },
	]);

	return routeElement;
};

export default RouterComp;
