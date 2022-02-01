import StyledNav from "../style/StyledNav";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import img from "../img/logo.png";

const Nav = ({ user, setUser, purchase }) => {
  const history = useHistory();

  // useState for menu toggle on small screens
  const [showSmall, setShowSmall] = useState(false);

  return (
    <StyledNav>
      <div className="nav">
        <div>
          <Link to="/">
            <img src={img} alt="" width="60px" height="60px" />
          </Link>
        </div>
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/games">Search Games</Link>
        </div>
        <div className="link">
          <Link to="/gamenews">Game News</Link>
        </div>
        <div className="link">
          <Link to="/giveaways">Giveaways</Link>
        </div>
        <div className="link">
          <Link to="/merch">Merch</Link>
        </div>
        {user && user.userCategory !== "admin" ? (
          <div className="link">
            <Link to="/cart">
              Cart {purchase.length > 0 ? purchase.length : ""}
            </Link>
          </div>
        ) : (
          ""
        )}
        {user ? (
          <button
            className="logOutBtn link"
            onClick={() => {
              setUser(null);
              history.push("/");
            }}
          >
            Logout
          </button>
        ) : (
          <div className="link">
            <Link to="/login">Login</Link>
          </div>
        )}
        {user ? (
          ""
        ) : (
          <div className="link">
            <Link to="/register">Register</Link>
          </div>
        )}
        {user ? <div className="link">{user?.username}</div> : ""}

        <div
          className="burger"
          onClick={() => {
            setShowSmall(!showSmall);
          }}
        >
          <div class="stripe"></div>
          <div class="stripe"></div>
          <div class="stripe"></div>
        </div>
      </div>

      {showSmall && (
        <div
          className="small-menu"
          onClick={() => {
            setShowSmall(false);
          }}
        >
          <div className="link-small">
            <Link to="/">Home</Link>
          </div>
          <div className="link-small">
            <Link to="/games">Search Games</Link>
          </div>
          <div className="link-small">
            <Link to="/gamenews">Game News</Link>
          </div>
          <div className="link-small">
            <Link to="/giveaways">Giveaways</Link>
          </div>
          <div className="link-small">
            <Link to="/merch">Merch</Link>
          </div>
          {user && user.userCategory !== "admin" ? (
            <div className="link-small">
              <Link to="/cart">
                Cart {purchase.length > 0 ? purchase.length : ""}
              </Link>
            </div>
          ) : (
            ""
          )}
          {user ? (
            <button
              className="logOutBtn link-small"
              onClick={() => {
                setUser(null);
                history.push("/");
              }}
            >
              Logout
            </button>
          ) : (
            <div className="link-small">
              <Link to="/login">Login</Link>
            </div>
          )}
          {user ? (
            ""
          ) : (
            <div className="link-small">
              <Link to="/register">Register</Link>
            </div>
          )}
          {user ? <div className="link-small">{user?.username}</div> : ""}
        </div>
      )}
    </StyledNav>
  );
};

export default Nav;
