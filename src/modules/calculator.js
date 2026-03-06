const calc = () => {
    const calcItems = document.querySelector('.calc-type');
    const calcSquareMeters = document.querySelector('.calc-square');
    const calcRooms = document.querySelector('.calc-count');
    const calcSpeed = document.querySelector('.calc-day');
    const calcTotal = document.querySelector('#total');

    const inputs = [calcSquareMeters, calcRooms, calcSpeed];
    let inputTimer;

    const calculate = () => {
        calcTotal.textContent = +(calcSquareMeters.value * calcRooms.value * calcSpeed.value);
    }

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/\D/g, "");

            clearInterval(inputTimer);
            inputTimer = setTimeout(calculate, 1000);
        })
    })

    calcItems.addEventListener('change', e => {
        e.preventDefault();
        calculate();
      })

}
export default calc;