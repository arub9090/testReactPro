import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const createAlert = async (altmsg, msgType) => {
    dispatch({
      type: "SET_ALERT",
      payload: { altmsg, msgType },
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
        payload: initialState,
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state.alert, createAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
