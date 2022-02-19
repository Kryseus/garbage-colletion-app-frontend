import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Calendar from "./Calendar/Calendar.js";
import GarbageCalendar from "./Calendar/Calendar.js";

const CalendarByStreet = () => {
  const { id } = useParams();
  const [garbageSchedule, setGarbageSchedule] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGarbages = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${process.env.REACT_APP_GARBAGE}/streets/${id}/schedule`);
        setGarbageSchedule(data);
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
  }, [id, error]);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (loading) return <Spinner animation="border" variant="primary" />;

  return <GarbageCalendar garbageSchedule={garbageSchedule} />;
};

export default CalendarByStreet;