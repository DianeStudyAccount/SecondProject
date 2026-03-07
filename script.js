const sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

getData("./db.json")
  .then((data) => {
    return sendData("https://jsonplaceholder.typicode.com/posts", data);
  })
  .then((result) => {
    console.log("Sent:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
