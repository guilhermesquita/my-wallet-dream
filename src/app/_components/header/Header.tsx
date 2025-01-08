"use client";

import HamburgerIcon from "../commons/icons/hambugerIcon";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Avatar>
        <AvatarImage
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <AvatarFallback>GM</AvatarFallback>
      </Avatar>

      <div
        className="cursor-pointer hover:bg-mld-gray100 p-2 rounded transition"
        onClick={() => alert("open Modal")}
      >
        <HamburgerIcon />
      </div>
    </header>
  );
};

export default Header;
