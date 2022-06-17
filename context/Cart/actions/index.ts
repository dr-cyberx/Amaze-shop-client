export const actionsType: { [key: string]: string } = {
  OPEN_MODEL: "OPEN_MODEL",
  CLOSE_MODEL: "CLOSE_MODEL",
  SHOW_CART_PRODUCT_COUNT: "SHOW_CART_PRODUCT_COUNT",
  REMOVE_CART_PRODUCT: "REMOVE_CART_PRODUCT",
  ADD_COUNT_PRODUCT: "ADD_COUNT_PRODUCT",
  HIDE_LOADER: "HIDE_LOADER",
  SHOW_LOADER: "SHOW_LOADER",
  SET_USER: "SET_USER",
  SET_CART_LENGTH: "SET_CART_LENGTH",
  SHOW_SEARCH_SUGGESTION_CONTAINER: "SHOW_SEARCH_SUGGESTION_CONTAINER",
  HIDE_SEARCH_SUGGESTION_CONTAINER: "HIDE_SEARCH_SUGGESTION_CONTAINER",
  CART_BILL: "CART_BILL",
  ADD_Data_FOR_ORDER: "ADD_Data_FOR_ORDER",
};

export const dispatchActions = (dispatch: React.Dispatch<any>) => {
  return {
    openPostModal: (): void => {
      dispatch({
        type: "OPEN_MODEL",
      });
    },

    closePostModal: (): void => {
      dispatch({
        type: "CLOSE_MODEL",
      });
    },

    showLoading: (): void => {
      dispatch({
        type: "SHOW_LOADER",
      });
    },

    hideLoading: (): void => {
      dispatch({
        type: "HIDE_LOADER",
      });
    },

    setUserData: (userData: any): void => {
      dispatch({
        type: "SET_USER",
        payload: userData,
      });
    },

    showSeachSuggestionContainer: (): void => {
      dispatch({
        type: "SHOW_SEARCH_SUGGESTION_CONTAINER",
      });
    },

    hideSeachSuggestionContainer: (): void => {
      dispatch({
        type: "HIDE_SEARCH_SUGGESTION_CONTAINER",
      });
    },

    updateBillInCart: (payload: any): void => {
      dispatch({
        type: "CART_BILL",
        payload,
      });
    },

    addDataForOrder: (payload: any): void => {
      dispatch({
        type: "ADD_Data_FOR_ORDER",
        payload,
      });
    },
  };
};
