import React from "react";
//import "./calendar.css";

const Calendar = () => {
  const date = new Date();

  const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today"><div class="datenumber">${i}</div>
      <div class="icons1">
      <ul class="colorlist">
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
      </ul>
      </div>
      <div class="icons2">
      <ul class="colorlist">
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
      </ul>
      </div>
      </div>`;
      } else {
        days += `<div><div class="datenumber">${i}</div>
      <div class="icons1">
      <ul class="colorlist">
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
      </ul>
      </div>
      <div class="icons2">
      <ul class="colorlist">
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
        <li class="color"></li>
      </ul>
      </div>
      </div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }
  };

  document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();

 const garbages = () => (

  <div class="container">
    <div class="calendar">
      <div class="month">
        <i class="fas fa-angle-left prev">&lt;</i>
        <div class="date">
          <h1>Month</h1>
          <p>Date</p>
        </div>
        <i class="fas fa-angle-right next">&gt;</i>
      </div>
      <div class="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div class="days"></div>
    </div>
  </div>
  );
};


export default Calendar;
