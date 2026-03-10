let req = new XMLHttpRequest();

req.open("POST", "https://jsonplaceholder.typicode.com/posts");

req.setRequestHeader("Content-Type", "application/json");

req.responseType = "json";

req.onload = () => {
  if (req.status >= 200 && req.status < 300) {
    console.log(req.response);
  } else {
    console.log(`Error ${req.status}: ${req.statusText}`);
  }
};

req.onprogress = (e) => {
  if (e.lengthComputable) {
    console.log(`Received ${e.loaded} of ${e.total} bytes`);
  } else {
    console.log(`Received ${e.loaded} bytes`);
  }
};
req.onerror = () => {
  alert("Request failed");
};
const data = {
  title: "user",
  body: {
    username: "John123",
    password: 456123,
  },
  userId: 1,
};

req.send(JSON.stringify(data));
