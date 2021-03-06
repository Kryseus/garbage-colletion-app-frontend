import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const SelectStreet = () => {
  const [streets, setStreets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGarbages = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${process.env.REACT_APP_GARBAGE}`);
        setStreets(data);
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

  return (
    <ul>
      {streets.map((str) => (
        <li key={str.id}>
            <Link to={`/street/${str.id}`}>{str.street}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SelectStreet;
