import { Link } from "react-router-dom";

function Tract({ tract, index }) {
  return (
    <tr>
      <td>{tract.date}</td>
      <td>
        <Link to={`/tracts/${index}`}>{tract.item_name}</Link>
      </td>
      <td>{tract.amount}</td>
    </tr>
  );
}

export default Tract;
