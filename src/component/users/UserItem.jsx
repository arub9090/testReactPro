import React from "react";
import PropTypes from "prop-types";

function UserItem({ myuser: { login, avatar_url } }) {
  return (
    <div className="card shadow-lg bg-base-200">
      <div class="flex flex-row justify-between">
        <div class="basic-1/4 m-2">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src={avatar_url} />
            </div>
          </div>
        </div>

        <div class="basic-3/4 self-center pr-3">
          <div class="grid grid-cols-1 justify-items-end gap-2">
            <div className="text-whitetext-l font-bold">{login}</div>
            <div class="btn btn-glass btn-xs w-18">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  myuser: PropTypes.object.isRequired,
};

export default UserItem;
