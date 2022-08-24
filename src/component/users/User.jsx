import React from "react";
import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'

function User() {
  const { single_user, fetchOneUser } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    fetchOneUser(params.login);
  }, []);

  return (
    <>
    <div className="container mx-auto">
    <div> 
        <Link to='/' className="btn btn-glass btn-md mb-6"> Back to Search</Link>
    </div>
    <div className="flex flex-row">
      <div className="mr-6">
        <div className="avatar">
          <div className="w-32 rounded">
            <img src={single_user.avatar_url} />
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 text-3xl font-bold text-white">{single_user.name}</div>
        <div className="mb-3">{single_user.bio}</div>
        <a href={single_user.html_url} target="_blank" className="btn btn-secondary btn-xs">Visit to Github Page</a>
      </div>
    </div>
    </div>
    </>
  );
}

export default User;
