const getData = () => {
  const selectCars = document.querySelector("#cars");
  const brand = document.querySelector("#brand");
  const model = document.querySelector("#model");
  const price = document.querySelector("#price");

  fetch("./cars.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`There's an error, sorry`);
      }
      return response.json();
    })
    .then((data) => {
      data.cars.forEach((car) => {
        const option = document.createElement("option");
        option.value = car.brand;
        option.textContent = `${car.brand} ${car.model}`;
        selectCars.append(option);
      });

      selectCars.addEventListener("change", () => {
        const selectedCar = data.cars.find(
          (car) => car.brand === selectCars.value,
        );
        if (selectedCar) {
          brand.innerHTML = `<strong> Бренд </strong>: ${selectedCar.brand}`;
          model.innerHTML = `<strong> Модель </strong>: ${selectedCar.model}`;
          price.innerHTML = `<strong> Цена </strong>: $${selectedCar.price}`;
        } else {
          brand.innerHTML = "";
          model.innerHTML = "";
          price.innerHTML = "";
        }
      });
    })
    .catch((err) => {
      alert("Error fetching data: " + err.message);
    });
};

getData();
