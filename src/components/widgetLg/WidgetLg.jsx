import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLg-btn " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLg-title">Latest Transactions</h3>
      <table className="widgetLg-table">
        <tr className="widgetLg-tr">
          <th className="widgetLg-th">Customer</th>
          <th className="widgetLg-th">Date</th>
          <th className="widgetLg-th">Amount</th>
          <th className="widgetLg-th">Status</th>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src="https://images.pexels.com/photos/9700238/pexels-photo-9700238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-date">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src="https://images.pexels.com/photos/9700238/pexels-photo-9700238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-date">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src="https://images.pexels.com/photos/9700238/pexels-photo-9700238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-date">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLg-tr">
          <td className="widgetLg-user">
            <img
              src="https://images.pexels.com/photos/9700238/pexels-photo-9700238.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt=""
              className="widgetLg-img"
            />
            <span className="widgetLg-name">Susan Carol</span>
          </td>
          <td className="widgetLg-date">2 Jun 2021</td>
          <td className="widgetLg-amount">$122.00</td>
          <td className="widgetLg-status">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
