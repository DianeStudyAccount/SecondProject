const formValidation = () => {
  const forms = document.querySelectorAll("form");

  const nameValidation = {
    user_name: /[^а-я ]/gi,
    user_phone: /[^\d()+-]/g,
    user_message: /[^а-я0-9.,!? ]/gi,
  };

  const typeValidation = {
    text: /[^а-я -]/gi,
    tel: /[^\d()-]/g,
    email: /[^a-z0-9@\-_\.!~*']/gi,
  };

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
    return value.replace(/[^\d()+-]/g, "");
  };

  forms.forEach((form) => {
    form.addEventListener("input", (e) => {
      const target = e.target;
      const name = target.name;
      const type = target.type;

      if (nameValidation[name]) {
        target.value = target.value.replace(nameValidation[name], "");
      } else if (typeValidation[type]) {
        target.value = target.value.replace(typeValidation[type], "");
      }
    });
    form.addEventListener(
      "blur",
      (e) => {
        const target = e.target;
        const type = target.type;

        if (type === "text") {
          target.value = cleanText(target.value);
        }

        if (type === "email") {
          target.value = cleanEmail(target.value);
        }

        if (type === "tel") {
          target.value = cleanTel(target.value);
        }
      },
      true,
    );
  });
};
export default formValidation;
