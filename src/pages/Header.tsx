import React, { useContext } from "react";
import { createClient } from "@supabase/supabase-js";
import { UserContext } from "../context/GoogleUserContext";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer } from "../styles/StyledComponents";

const supabase = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL,
  import.meta.env.VITE_REACT_APP_ANON_KEY
);

const Header: React.FC = () => {
  const { googleUser } = useContext(UserContext);
  const navigate = useNavigate();
  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate("/");
      window.location.reload(); // Recarregar a página após o logout
    } else {
      console.error("Erro ao fazer logout:", error);
    }
  }

  return (
    <div>
      <StyledContainer>
        <div>
          {/*@ts-ignore*/}
          {googleUser?.user_metadata?.full_name ? (
            <div className="header">
              <ul className="ulHeader">
                <li className="liPoster">
                  <Link to="/home">
                    <p>Poster</p>
                  </Link>
                </li>
                <li className="liHome">
                  <Link to="/home">Home</Link>
                </li>
                <li className="liUserpage">
                  <Link to="/userpage">Your Posts</Link>
                </li>
                <li className="">
                  <Link to="/createposts">Create new posts</Link>
                </li>
                <li className="">Contact</li>
                <li className="">
                  <img
                    // @ts-ignore
                    src={googleUser?.user_metadata.avatar_url}
                    alt="avatar"
                    className="avatar-image"
                  />
                </li>
                <li className="liButton">
                  <button className="" onClick={signOutUser}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="header">
              <ul className="ulHeader">
                <li className="liPoster">
                  <Link to="/home">
                    <p>Poster</p>
                  </Link>
                </li>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>Contact</li>
                <li>
                  <button className="" onClick={signOutUser}>
                    Login
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </StyledContainer>
    </div>
  );
};

export default Header;
