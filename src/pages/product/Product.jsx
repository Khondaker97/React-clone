import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@mui/icons-material";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitle-container">
        <h1 className="product-title">Product</h1>
        <Link to="/newProduct">
          <button className="product-add-btn">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="productTop-left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTop-right">
          <div className="productInfo-top">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productInfo-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="productInfo-bottom">
            <div className="productInfo-item">
              <span className="productInfo-key">id:</span>
              <span className="productInfo-value">123</span>
            </div>
            <div className="productInfo-item">
              <span className="productInfo-key">sales:</span>
              <span className="productInfo-value">5123</span>
            </div>
            <div className="productInfo-item">
              <span className="productInfo-key">Active:</span>
              <span className="productInfo-value">yes</span>
            </div>
            <div className="productInfo-item">
              <span className="productInfo-key">in Stock:</span>
              <span className="productInfo-value">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form className="product-form">
          <div className="productForm-left">
            <label>Product Name</label>
            <input type="text" placeholder="Apple AirPod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productForm-right">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="productUpload-img"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="product-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
