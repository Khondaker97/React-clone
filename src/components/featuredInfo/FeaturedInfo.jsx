import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import "./FeaturedInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-moneyContainer">
          <span className="featured-money">$2,434</span>
          <span className="featured-moneyRate">
            -11.8 <ArrowDownward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-moneyContainer">
          <span className="featured-money">$4,434</span>
          <span className="featured-moneyRate">
            -11.8 <ArrowDownward className="featured-icon" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-moneyContainer">
          <span className="featured-money">$2,124</span>
          <span className="featured-moneyRate">
            -11.8 <ArrowUpward className="featured-icon positive" />
          </span>
        </div>
        <span className="featured-sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
