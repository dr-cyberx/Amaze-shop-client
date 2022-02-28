export interface TypeProduct {
  id: string;
  productDescription: string;
  productImage: string;
  productName: string;
  productPrice: string;
  productRating: string;
  productSeller: string;
}

export interface Type_Create_Update_Product {
  data: TypeProduct | null;
  error: Boolean;
  message: string;
  status: number;
}
