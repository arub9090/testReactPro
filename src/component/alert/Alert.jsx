import React from "react";
import { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import { FaHandPointDown } from "react-icons/fa";

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null &&
    alert.altmsg && (
      <div className="flex flex-row mb-2 inline text-red-400">
        <FaHandPointDown className="mr-2 text-2xl " />
        <p>{alert.altmsg}</p>
      </div>
    )
  );
}
export default Alert;
