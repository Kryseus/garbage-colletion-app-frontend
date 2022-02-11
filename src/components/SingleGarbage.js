import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

const SingleGarbage = () => {
  const { id } = useParams();
  const [garbage, setGarbage] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGarbage = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${process.env.REACT_APP_GARBAGE}/${id}`
        );
        setGarbage(data);
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
    !error && getGarbage();
  }, [id, error]);

  if (error) return <Alert variant="danger">{error}</Alert>;

  return !loading && garbage.street ? (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>
          <h3>{garbage.street}</h3>
          <h5>{garbage.street.black}</h5>
          </Card.Title>
          <Card.Text>
            <Row className="mt-5">
            
            </Row>
            <h5>{garbage.street.black}</h5>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <h5>Blubb</h5>
        </Card.Footer>
      </Card>
    </Col>
  ) : (
    <Spinner animation="border" variant="primary" />
  );
};

export default SingleGarbage;
