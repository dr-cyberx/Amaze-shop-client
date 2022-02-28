import { CreateProduct, UpdateProduct } from '../../../controllers/Products';
import { IGetAllData } from '../../../types/authType';

const ProductMutations = {
  createProduct: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IGetAllData> => {
    const product: IGetAllData = await CreateProduct(args, token);
    return product;
  },

  updateProduct: async (
    _parents: any,
    args: any,
    { token }: any,
  ): Promise<IGetAllData> => {
    const product: IGetAllData = await UpdateProduct(
      { ...args.input, productId: args.productId },
      token,
    );
    return product;
  },
};

export default ProductMutations;
