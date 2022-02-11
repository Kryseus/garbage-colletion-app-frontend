import { useState, useEffect } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const Home = () => {
  const [garbages, setGarbages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGarbages = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${process.env.REACT_APP_GARBAGE}`);
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
  return garbages.map((garbage) => (
    <Col md={4} className="mb-4" key={garbage.id}>
      <Card style={{ height: "100%" }}>
        <Card.Body>
          <Card.Title>
            {garbage.street}
          </Card.Title>
          <Card.Text>
            Restmüll: {garbage.street}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        Restmüll: {garbage.street}
        </Card.Footer>
      </Card>
    </Col>
  ));
};

export default Home;
