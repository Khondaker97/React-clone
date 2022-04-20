import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitle-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-add-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="userShow-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShow-img"
            />
            <div className="userTop-title">
              <span className="userTop-uName">Anna Becker</span>
              <span className="userTop-uTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShow-bottom">
            <span className="userBtm-title">Account Details</span>
            <div className="userShow-info">
              <PermIdentity className="userShow-icon" />
              <span className="userBtm-info">annabeck99</span>
            </div>
            <div className="userShow-info">
              <CalendarToday className="userShow-icon" />
              <span className="userBtm-info">10.12.1999</span>
            </div>
            <span className="userBtm-title">Contact Details</span>
            <div className="userShow-info">
              <PhoneAndroid className="userShow-icon" />
              <span className="userBtm-info">+1 123 456 67</span>
            </div>
            <div className="userShow-info">
              <MailOutline className="userShow-icon" />
              <span className="userBtm-info">annabeck99@gmail.com</span>
            </div>
            <div className="userShow-info">
              <LocationSearching className="userShow-icon" />
              <span className="userBtm-info">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-upTitle">Edit</span>
          <form className="user-upForm">
            <div className="user-upLeft">
              <div className="user-upItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="user-upInput"
                />
              </div>
              <div className="user-upItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="user-upInput"
                />
              </div>
              <div className="user-upItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="annabeck99@gmail.com"
                  className="user-upInput"
                />
              </div>
              <div className="user-upItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="user-upInput"
                />
              </div>
              <div className="user-upItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="user-upInput"
                />
              </div>
            </div>
            <div className="user-upRight">
              <div className="user-upUpload">
                <img
                  className="user-upImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="user-upIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="user-upBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
