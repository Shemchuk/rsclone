// /* eslint-disable no-console */
// /* eslint-disable prefer-const */
// // const timerInput = document.getElementById("time"); // Берём строку
// // const buttonRun = document.querySelector('.button .timer-container__button'); // Берём кнопку запуска
// console.log(1234);
// function setTimer() {
//   const timeValue = 60;
//   let timeMinut;
//   const timerShow = document.querySelector('.timer-container');
//   document.querySelector('.timer-container__button').addEventListener('click', () => {
//     // eslint-disable-next-line radix
//     timeMinut = parseInt(timeValue);
//   });
//   // eslint-disable-next-line func-names
//   let timer = setInterval(function () {
//     let seconds = timeMinut % 60; // Получаем секунды
//     let minutes = (timeMinut / 60) % 60; // Получаем минуты
//     let hour = (timeMinut / 60 / 60) % 60; // Получаем часы
//     // Условие если время закончилось то...
//     if (timeMinut <= 0) {
//       // Таймер удаляется
//       clearInterval(timer);
//       // Выводит сообщение что время закончилось
//       document.querySelector('.timer-container').innerHTML = 'Время вышло!';
//     } else {
//       // Создаём строку с выводом времени
//       let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
//       // Выводим строку в блок для показа таймера
//       timerShow.innerHTML = strTimer;
//     }
//     --timeMinut; // Уменьшаем таймер
//   }, 1000);
// }

// export default setTimer;
