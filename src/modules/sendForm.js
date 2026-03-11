const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка";
  const successText = "Спасибо! Наш менеджер свяжется с Вами!";
  const loader = `  <div class="pins three">
    <div class="pin"></div>
    <div class="pin"></div>
    <div class="pin"></div>
  </div>`;

  const validate = (list) => {
    let success = true;

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input, textarea");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.innerHTML = loader;

    if (!form.contains(statusBlock)) {
      form.append(statusBlock);
    }

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((el) => {
      const element = document.getElementById(el.id);

      if (el.type === "block") {
        formBody[el.id] = element.textContent;
      } else if (el.type === "input") {
        formBody[el.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((err) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("not correct data");
    }
  };

  try {
    if (!form) {
      throw new Error("No form detected");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default sendForm;
