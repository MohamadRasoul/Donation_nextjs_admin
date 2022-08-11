import React from "react";
import { createPopper } from "@popperjs/core";
import useAuth from "../../hooks/auth";

const UserDropdown = () => {
  // dropdown props
  const { logout, user } = useAuth();
  console.log(user);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const logoutHandler = (e) => {
    e.preventDefault()
    logout();

  };


  return (
    <>
      <a
        className="text-blueGray-100 block"
        
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-2xl font-bold text-base-green bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            {user?.email.charAt(0).toUpperCase()}
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >

        <a
          
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => logoutHandler(e)}
        >
          logout
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
