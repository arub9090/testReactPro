import React from "react";
import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import { FaInfo } from "react-icons/fa";
import { getUserAndRepos } from "../../context/github/GithubActions";
import Spinner from "../asset/Spinner";

function User() {
  const { single_user, repos, loading, dispatch } = useContext(GithubContext);
  const params = useParams();

  //combinationOf User And Repo Function

  const fetchUserAndRepos = async () => {
    dispatch({ type: "SET_LOADING" });

    const combinedData = await getUserAndRepos(params.login);
    dispatch({
      type: "GET_USER_AND_REPO",
      payload: combinedData,
    });

    dispatch({ type: "LOADING_OFF" });
  };

  useEffect(() => {
    fetchUserAndRepos();
  }, [dispatch, params.login]);

  if (!loading) {
    return (
      <>
        <div className="container mx-auto">
          <div>
            <Link to="/" className="btn btn-glass btn-md mb-6">
              {" "}
              Back to Search
            </Link>
          </div>
          <div className="flex flex-row">
            <div className="mr-6">
              <div className="avatar">
                <div className="w-32 rounded">
                  <img src={single_user.avatar_url} alt="otherimgs" />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-3 text-2xl font-bold text-white">
                {single_user.name}

                <div className=" ml-2 mr-2 badge badge-warning badge-sm">
                  <FaInfo className="mr-2" /> User
                </div>
              </div>
              <div className="mb-3">{single_user.bio}</div>
              <a
                href={single_user.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-xs"
              >
                Visit to Github Page
              </a>
            </div>
          </div>

          <div class="stats shadow w-full">
            <div class="stat">
              <div class="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Followers</div>
              <div class="stat-value text-primary text-5xl">
                {single_user.followers}
              </div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div class="stat-title">Following</div>
              <div class="stat-value text-secondary">
                {single_user.following}
              </div>
            </div>

            <div class="stat">
              <div class="stat-figure text-secondary"></div>

              <div class="stat-title">Public Repos</div>
              <div class="stat-value">{single_user.public_repos}</div>
              <div class="stat-desc text-secondary">{single_user.name} got</div>
            </div>
            <div class="stat">
              <div class="stat-figure text-secondary"></div>

              <div class="stat-title">Public Gists</div>
              <div class="stat-value">{single_user.public_gists}</div>
              <div class="stat-desc text-secondary">This is Gits</div>
            </div>
            <div class="stat">
              <div class="stat-figure text-secondary"></div>

              <div class="stat-title">User Location</div>
              <div class="stat-value">{single_user.location}</div>
              <div class="stat-desc text-secondary">Living Place</div>
            </div>
          </div>

          <div>
            <div>
              <Repos repo_prop={repos} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default User;
