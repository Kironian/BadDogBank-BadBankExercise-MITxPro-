import { Card } from "react-bootstrap";
import image from "./imgs/bank.png";
import './css/home.css';
import './css/index.css';

const Home = () => {
    return (
      <Card style={{ width: "200rem" }}>
      <Card.Body>
        <Card.Title>Home</Card.Title>
            <Card.Img
            variant="top"
            src={ image } alt="Card image cap"
            />
              <Card.Title>Bad Dog Bank</Card.Title>
              <Card.Text>You've never met a worse banker.</Card.Text>
      </Card.Body>
    </Card>
    )
}

export default Home;