import { CreateProduct, UpdateProduct } from '../../../controllers/Products';
import { IGetAllData } from '../../../types/authType';
import { Type_Create_Update_Product } from '../../../types/ProductType';

const ProductMutations = {
  createProduct: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IGetAllData | Type_Create_Update_Product> => {
    const product: IGetAllData | Type_Create_Update_Product =
      await CreateProduct(args, token);
    return product;
  },

  updateProduct: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IGetAllData | Type_Create_Update_Product> => {
    const product: IGetAllData | Type_Create_Update_Product =
      await UpdateProduct({ ...args.input, productId: args.productId }, token);
    return product;
  },
};

export default ProductMutations;
