import React, { useState } from "react";
import moment from "moment";
import "../../../src/styles.css";
import Calendar from "./calendar/index.jsx";

export default function () {
  const [value, setValue] = useState(moment());
  return <Calendar value={value} onChange={setValue}/>;
}
