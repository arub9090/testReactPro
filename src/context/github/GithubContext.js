import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    single_user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // this fetch user was for tesing purpose.

  const clearSearch = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_API}/search/users?${params}`, {
      headers: { Authorization: `${GITHUB_TOKEN}` },
    });

    const { items } = await res.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // fetch One Single User
  const fetchOneUser = async (login) => {
    setLoading();

    const res = await fetch(`${GITHUB_API}/users/${login}`, {
      headers: { Authorization: `${GITHUB_TOKEN}` },
    });

    const singleUserData = await res.json();
    if(res.status === 404){
      window.location= '/notfound'
    }else{
      dispatch({
        type: "GET_SINGLE_USER",
        payload: singleUserData,
      });
    }
  };

  //set loading function to use it globally

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearSearch,
        single_user: state.single_user,
        fetchOneUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
