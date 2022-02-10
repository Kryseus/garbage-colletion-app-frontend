import { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const Home = () => {
  const [garbages, setGarbages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGarbages = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${process.env.REACT_APP_Garbage}`);
        setGarbages(data);
        setLoading(false);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.error);
          setTimeout(() => setError(null), 3000);
          setLoading(false);
        } else {
          setError("Network error");
          setTimeout(() => setError(null), 3000);
          setLoading(false);
        }
      }
    };
    !error && getGarbages();
  }, [error]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (loading) return <Spinner animation="border" variant="primary" />;
  return garbages.map((Garbage) => (
    <Col md={4} className="mb-4" key={Garbage.id}>
      <Card style={{ height: "100%" }}>
        <Card.Body>
          <Card.Title>
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </Col>
  ));
};

export default Home;
