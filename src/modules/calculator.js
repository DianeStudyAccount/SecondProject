const calc = (price = 100) => {
  const calcBlock = document.querySelector(".calc-block");
  const calcItems = document.querySelector(".calc-type");
  const calcSquareMeters = document.querySelector(".calc-square");
  const calcRooms = document.querySelector(".calc-count");
  const calcSpeed = document.querySelector(".calc-day");
  const calcTotal = document.querySelector("#total");

  const inputs = [calcSquareMeters, calcRooms, calcSpeed];

  let prevTotal = 0;

  const animateCount = (endValue) => {
    let start = 0;

    const step = () => {
      start += endValue / 30;

      if (start >= endValue) {
        calcTotal.textContent = endValue;
        return;
      }

      calcTotal.textContent = Math.floor(start);
      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const calculate = () => {
    const calcTypeValue = +calcItems.options[calcItems.selectedIndex].value;
    const calcSquareMetersValue = +calcSquareMeters.value;

    let totalValue = 0;
    let calcCountValue = 1;
    let calcSpeedValue = 1;

    if (calcRooms.value > 1) {
      calcCountValue += +calcRooms.value / 10;
    }

    if (calcSpeed.value && calcSpeed.value < 5) {
      calcSpeedValue = 2;
    } else if (calcSpeed.value && calcSpeed.value < 10) {
      calcSpeedValue = 1.5;
    }
    if (calcItems.value && calcSquareMeters.value) {
      totalValue = +(
        price *
        calcSquareMetersValue *
        calcTypeValue *
        calcCountValue *
        calcSpeedValue
      );
    } else {
      totalValue = 0;
    }
    const finalValue = Math.round(totalValue);

    if (finalValue === prevTotal) {
      return;
    }

    animateCount(finalValue);
    prevTotal = finalValue;
  };

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
      calculate();
    });
  });
  calcItems.addEventListener("change", calculate);
};
export default calc;
