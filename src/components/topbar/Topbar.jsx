import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import React from "react";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="t-wrapper">
        <div className="t-left">
          <span className="logo">TanVir</span>
        </div>
        <div className="t-right">
          <div className="t-iconContainer">
            <NotificationsNone />
            <span className="t-iconBadge">2</span>
          </div>
          <div className="t-iconContainer">
            <Language />
            <span className="t-iconBadge">2</span>
          </div>
          <div className="t-iconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/9700238/pexels-photo-9700238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="profile pic"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
