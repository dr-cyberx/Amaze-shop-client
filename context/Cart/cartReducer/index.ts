import { actionsType } from '../actions/index';

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionsType.OPEN_MODEL:
      return {
        ...state,
      };
      break;
    case actionsType.CLOSE_MODEL:
      return {
        ...state,
      };
      break;
    case actionsType.GET_ALL_CART_PRODUCT:
      return {
        ...state,
      };
      break;
    case actionsType.REMOVE_CART_PRODUCT:
      return {
        ...state,
      };
      break;
    case actionsType.SHOW_CART_PRODUCT_COUNT:
      return {
        ...state,
      };
      break;
    case actionsType.ADD_COUNT_PRODUCT:
      return {
        ...state,
      };
      break;

    default:
      break;
  }
};

export default cartReducer;
