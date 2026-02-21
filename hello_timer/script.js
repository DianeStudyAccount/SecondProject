"use strict";

const hello = document.querySelector("#hello");
const today = document.querySelector("#today");
const time = document.querySelector("#time-now");
const NYcountdown = document.querySelector("#NYcountdown");
const daysOfTheWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const todayCounter = () => {
  const date = new Date();
  let greeting;

  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const dayName = daysOfTheWeek[day];

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours >= 6 && hours < 12) {
    greeting = "Доброе утро";
  } else if (hours >= 12 && hours < 18) {
    greeting = "Добрый день";
  } else if (hours >= 18 && hours < 24) {
    greeting = "Добрый вечер";
  } else {
    greeting = "Доброй ночи";
  }

  let ampm = hours >= 12 ? "PM" : "AM";
  let formattedHours = hours % 12;
  formattedHours = formattedHours ? formattedHours : 12;

  const nextYear = new Date(date.getFullYear() + 1, 0, 1);
  const diff = nextYear - date;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  hello.textContent = greeting;
  today.textContent = `Сегодня: ${dayName}`;
  time.textContent = `Текущее время: ${formattedHours}:${minutes}:${seconds} ${ampm}`;
  NYcountdown.textContent = `До нового года осталось ${daysLeft} дней`;
};

todayCounter();
setInterval(todayCounter, 1000);
