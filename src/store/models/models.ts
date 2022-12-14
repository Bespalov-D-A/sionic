import { ORM } from "redux-orm";
import {Category} from "./Category/Category";
import {Product} from "./Product/Product";
import {ProductCover} from "./ProductCover/ProductCover";
import {ProductVariation} from "./ProductVariation/ProductVariation";
import {ProductVariationProperty} from "./VariationProperty/VariationProperty";
import {ProductVariationPropListValues} from "./VariationPropertyListValues/VariationPropertyListValues";
import {ProductVariationPropertyValue} from "./VariationPropertyValues/VariationPropertyValues";

export const orm = new ORM({
  stateSelector: (state) => state.ormReducer
});

orm.register(
  Category,
  Product,
  ProductCover,
  ProductVariation,
  ProductVariationProperty,
  ProductVariationPropertyValue,
  ProductVariationPropListValues,
);
