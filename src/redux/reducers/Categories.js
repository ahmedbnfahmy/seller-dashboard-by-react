const initialize = {
  categories: [],
  category: {},
};

export const categoryReducer = (state = initialize, action) => {
  switch (action.type) {
    case "GET_Category_LIST":
      return {
        ...state,
        categories: action.payload,
      };

    case "GET_SINGIL_Category":
      return {
        ...state,
        category: action.payload,
      };
    case "GET_CATEGORY_SUBCATEGORY":
      return {
        ...state,
        supCategories: action.payload,
      };
    case "DELETE_Category":
      return {
        ...state,
        //categories: action.payload.data
      }
    case "ADD_Category":
      return {
        ...state,
        //categories: action.payload.data
      }
    case "UPDATE_Category":
      return {
        ...state
      }
    default:
      return state;
  }
};
