import React from "react";

const   Navbar = () => {
    return (
        <div className="bg-slate-800 h-16 px-16 py-4 items-center flex">
      <h1 className="text-5xl text-red-500 font-bold">Em Service</h1>
      <div className="space-x-4 ml-auto text-white">
      <a className="hover:text-blue-400" href='/'>Home</a>
      <a className="hover:text-blue-400"  href='/'>Profile</a>
      <a  className="hover:text-blue-400"  href='/'>LogOut</a>
      </div>
    </div>
    )
}
export default Navbar;