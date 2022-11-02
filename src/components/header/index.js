import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { FaSearch, FaCaretDown } from "react-icons/fa";

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
      <div className="flex flex-row  align-item-center ">
        <input type="text" className="grow-0 rounded-full align-center "></input>
        <FaSearch />
      </div>
      {user?.displayName ? (
        <div className="flex flex-row">
          <p className="px-10"> Welcome , {user?.displayName}</p>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Sign In</Link>
      )}
      <FaCaretDown />
    </div>
  );
}

export default Header;
