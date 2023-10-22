import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <div className="flex justify-between p-5 bg-white shadow-md ...">
        <Link to="/">
          <div className="font-bold text-2xl">APP LOGO</div>
        </Link>

        <div className="flex gap-5 font-bold">
          <Link to="/dashboard">
            <div>DASHBOARD</div>
          </Link>
          <Link to="/createAs">
            <div>CREATE ADS</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
