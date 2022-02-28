import { CreateProduct, UpdateProduct } from '../../../controllers/Products';

const ProductMutations = {

  createProduct: async (_parents: any, args: any, { token }: any) => {
    const product = await CreateProduct(args, token);
    return product;
  },

  updateProduct: async (_parents: any, args: any, { token }: any) => {
    console.log('update product args --> ', args, token);
    // const product = await UpdateProduct(args, token);
  },
};

export default ProductMutations;
