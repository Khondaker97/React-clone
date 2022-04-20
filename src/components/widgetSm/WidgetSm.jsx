import { Visibility } from "@mui/icons-material";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <h3 className="widgetSm-title">New Join Members</h3>
      <ul className="widgetSm-list">
        <li className="widgetSm-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-uName">Anna Keller</span>
            <span className="widgetSm-uTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-uName">Anna Keller</span>
            <span className="widgetSm-uTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-uName">Anna Keller</span>
            <span className="widgetSm-uTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-uName">Anna Keller</span>
            <span className="widgetSm-uTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
        <li className="widgetSm-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSm-img"
          />
          <div className="widgetSm-user">
            <span className="widgetSm-uName">Anna Keller</span>
            <span className="widgetSm-uTitle">Software Engineer</span>
          </div>
          <button className="widgetSm-btn">
            <Visibility className="widgetSm-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
