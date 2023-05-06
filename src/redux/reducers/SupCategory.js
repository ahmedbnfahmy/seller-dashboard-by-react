const initialize = {
    supCategories: [],
    supCategory: {},
  };
  
  export const supCategoryReducer = (state = initialize, action) => {
    switch (action.type) {
      case "GET_CATEGORY_SUBCATEGORY":
        return {
          ...state,
          supCategories: action.payload,
        };

      default:
        return state;
    }
  };
  