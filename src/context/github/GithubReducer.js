const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "LOADING_OFF":
      return {
        ...state,
        loading: false,
      };

    case "GET_USER_AND_REPO":
      return {
        ...state,
        single_user: action.payload.res1,
        repos: action.payload.res2,
      };

    default:
      return state;
  }
};

export default githubReducer;
