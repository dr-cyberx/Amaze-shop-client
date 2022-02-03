import { CreateProduct } from '../../../controllers/Products';

const ProductMutations = {
  createProduct: async (_parents: any, args: any, { token }: any) => {
    const product = await CreateProduct(args, token);
    return product;
  },
};

export default ProductMutations;
