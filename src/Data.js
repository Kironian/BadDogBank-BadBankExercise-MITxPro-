import { Card } from "react-bootstrap";
import { useBankContext } from "./Context";
import './css/data.css';

const Data = () => {
  const { bank } = useBankContext();
  let items = bank.users;
  return (
    <Card style={{ width: "200rem" }}>
      <Card.Body>
      <Card.Title>ALL DATA!</Card.Title>
      <Card.Text>Current User: {bank.loggedInUser}</Card.Text>
      {items.map((data) => (
        <ul className="list-group list-group-flush dataDisplay">
          <li className="list-group-item data-color">{data.name}</li>
          <li className="list-group-item data-color">{data.email}</li>
          <li className="list-group-item data-color">{data.password}</li>
          <li className="list-group-item data-color">${data.balance}</li>
        </ul>
      ))}
      </Card.Body>
    </Card>
  )
}

export default Data;