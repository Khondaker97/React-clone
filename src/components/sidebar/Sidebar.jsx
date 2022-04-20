import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="s-wrapper">
        <div className="s-menu">
          <h3 className="s-title">Dashboard</h3>
          <ul className="s-list">
            <Link to="/" className="link">
              <li className="s-listItem active">
                <LineStyle className="s-icon" />
                Home
              </li>
            </Link>
            <li className="s-listItem">
              <Timeline className="s-icon" />
              Analytics
            </li>
            <li className="s-listItem">
              <TrendingUp className="s-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="s-menu">
          <h3 className="s-title">Quick Menu</h3>
          <ul className="s-list">
            <Link to="/users" className="link">
              <li className="s-listItem">
                <PermIdentity className="s-icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="s-listItem">
                <Storefront className="s-icon" />
                Products
              </li>
            </Link>
            <li className="s-listItem">
              <AttachMoney className="s-icon" />
              Transactions
            </li>
            <li className="s-listItem">
              <BarChart className="s-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="s-menu">
          <h3 className="s-title">Notifications</h3>
          <ul className="s-list">
            <li className="s-listItem active">
              <MailOutline className="s-icon" />
              Mail
            </li>
            <li className="s-listItem">
              <DynamicFeed className="s-icon" />
              Feedback
            </li>
            <li className="s-listItem">
              <ChatBubbleOutline className="s-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="s-menu">
          <h3 className="s-title">Staff</h3>
          <ul className="s-list">
            <li className="s-listItem">
              <WorkOutline className="s-icon" />
              Manage
            </li>
            <li className="s-listItem">
              <Timeline className="s-icon" />
              Analytics
            </li>
            <li className="s-listItem">
              <Report className="s-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
