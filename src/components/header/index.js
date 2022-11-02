import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

function Header() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between">
      {user?.displayName ? (
        <div>
          <p> Welcome , {user?.displayName}</p>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Sign In</Link>
      )}
    </div>
  );
}

export default Header;
