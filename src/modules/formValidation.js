const formValidation = () => {
  const mainForm = document.querySelector("#form1");
  const footerForm = document.querySelector("#form2");
  const modalForm = document.querySelector("#form3");

  const forms = [mainForm, footerForm, modalForm];

  const cleanText = (value) => {
    value = value.replace(/[^а-я -]/gi, "");
    value = value.replace(/[- ]{2,}/g, " ");
    value = value.trim().toLowerCase();

    value = value
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return value;
  };

  const cleanEmail = (value) => {
    return value.replace(/[^a-z0-9@\-_\.!~*']/gi, "");
  };

  const cleanTel = (value) => {
    return value.replace(/[^\d()-]/g, "");
  };

  forms.forEach((form) => {
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const telInput = form.querySelector('input[type="tel"]');

    if (nameInput) {
      nameInput.addEventListener("blur", () => {
        nameInput.value = cleanText(nameInput.value);
      });
    }

    if (emailInput) {
      emailInput.addEventListener("blur", () => {
        emailInput.value = cleanEmail(emailInput.value);
      });
    }

    if (telInput) {
      telInput.addEventListener("blur", () => {
        telInput.value = cleanTel(telInput.value);
      });
    }
  });
};

export default formValidation;
