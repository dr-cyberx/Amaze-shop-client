import { actionsType } from "../actions/index";

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case actionsType.OPEN_MODEL:
      return {
        ...state,
        showCartModal: true,
      };
      break;
    case actionsType.CLOSE_MODEL:
      return {
        ...state,
        showCartModal: false,
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
    case actionsType.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
      break;

    case actionsType.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
      break;

    case actionsType.SET_USER:
      return {
        ...state,
        userDetail: action.payload,
      };
      break;

    case actionsType.SET_CART_LENGTH:
      return {
        ...state,
        cartLength: action.payload,
      };
      break;

    case actionsType.SHOW_SEARCH_SUGGESTION_CONTAINER:
      return {
        ...state,
        searchSuggestionContainer: {
          ...state.searchSuggestionContainer,
          shouldShow: true,
        },
      };
      break;

    case actionsType.HIDE_SEARCH_SUGGESTION_CONTAINER:
      return {
        ...state,
        searchSuggestionContainer: {
          ...state.searchSuggestionContainer,
          shouldShow: false,
        },
      };
      break;

    case actionsType.CART_BILL:
      return {
        ...state,
        totalBill: action.totalBill,
      };
      break;

    default:
      break;
  }
};

export default cartReducer;
