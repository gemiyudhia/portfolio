import React, { Children } from "react";
import { Link } from "react-router-dom";

export const Button = ({ children = "...", to }) => {
  return (
    <Link
      to={to}
      className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg font-semibold">
      {children}
    </Link>
  );
};
