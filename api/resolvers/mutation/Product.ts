import { CreateProduct } from '../../../controllers/Products';

const ProductMutations = {
  createProduct: async (_parents: any, args: any) => {
    const product = await CreateProduct(args);
    return product;
  },
};

export default ProductMutations;
