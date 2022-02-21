import React, { useState, useEffect } from "react";
import "./styles.css";
import buildCalendar from "./build";
import dayStyles, {isToday} from "./styles";
import Header from "./header";
//import CalendarByStreet from "../../CalendarByStreet";

const Calendar = ({ value, onChange }) => {
  const [calendar, setCalendar] = useState([]);
  

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
     <Header value={value} setValue={onChange}/>
     <div className="body">
         <div className="day-names">
             {
                ["s", "m", "t", "w", "t", "f", "s"].map((d) => <div className="week">{d}</div>)
             }
         </div>
     {calendar.map((week) => (
        <div>
          {week.map((day) => (
            <div className="day" onClick={() => onChange(day)}>
              <div className={dayStyles(day, value)}>
                {day.format("D").toString()}
                <p>Text goes here</p>
              {/*}  <div>
                {this.props.garbageSchedule?.colors?.map(color => {
                  const shouldBeColored = color.dates.find(day => day === `${day}`) ? 'yes' : 'no';
                  return (
                    <div>
                      {color.name} | {shouldBeColored}
                    </div>
                  )
                })}
              </div> */}
              </div>
            </div>
          ))}
        </div>
      ))}
     </div>
      
    </div>
  );
};

export default Calendar;
