import { GetAllProducts } from '../../../controllers/Products';
import { IGetAllData } from '../../../types/authType';
import { Type_Create_Update_Product } from '../../../types/ProductType';

export const productquery = {
  getallproducts: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<Type_Create_Update_Product | IGetAllData> => {
    const allProducts: Type_Create_Update_Product | IGetAllData =
      await GetAllProducts(token);
    console.log('allProducts -> ', allProducts);
    return allProducts;
  },
};

export const hi = 'hello';
