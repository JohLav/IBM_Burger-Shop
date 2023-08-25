import { Link } from "react-router-dom";
import "../../styles/table.scss";
import { AiOutlineEye } from "react-icons/ai";

export default function MyOrders() {
  return (
    <tbody>
      {arr.map((i) => (
        <tr key={i}>
          <td>#sdkfsdfdsf</td>
          <td>En cours de traitement</td> <td>23</td>
          <td>${2132}</td>
          <td>CB</td>
          <td>
            <Link to={`/order/${"asdsds"}`}>
              {" "}
              <AiOutlineEye />
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
