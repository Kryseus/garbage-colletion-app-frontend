import { useState, useEffect } from "react";
import axios from "axios";
import EventCalendar from "react-event-calendar";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";



const GarbageCalendar = () => {
  const [garbages, setGarbages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const events = [
    {
        start: '2015-07-20',
        end: '2015-07-02',
        eventClasses: 'optionalEvent',
        title: 'test event',
        description: 'This is a test description of an event',
    },
    {
        start: '2015-07-19',
        end: '2015-07-25',
        title: 'test event',
        description: 'This is a test description of an event',
        data: 'you can add what ever random data you may want to use later',
    },
  ];

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
          <Card.Title>{garbage.street}</Card.Title>
          
          < EventCalendar
            month={7}
            year={2015}
            events={garbage}
            onEventClick={(target, eventData, day) => console.log(eventData)} 
          />
          
        </Card.Body>
        <Card.Footer>Restmüll: {garbage.street}</Card.Footer>
      </Card>
    </Col>
  ));
};

export default GarbageCalendar;