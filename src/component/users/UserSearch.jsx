import React from "react";
import { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/github/GithubContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);

  const { createAlert } = useContext(AlertContext);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (text === "") {
      createAlert("Please Write Something to Search !", "error");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const data = await searchUsers(text);

      dispatch({
        type: "GET_USERS",
        payload: data,
      });

      setText("");
    }
  };
  return (
    <div className="grid grid-cols-1 mb-5 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className="form-control">
            <div className="flex flex-rows">
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered input-warning w-full max-w-xs"
                value={text}
                onChange={changeHandler}
              />
              <button
                type="submit"
                className="btn btn-primary rounded-full ml-3"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <button
          type="submit"
          className="btn btn-primary rounded-full ml-3 w-36 mt-5 xl:mt-0 lg:mt-0 md:mt-0 "
          onClick={() => dispatch({ type: "CLEAR_USERS" })}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default UserSearch;
