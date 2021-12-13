// 'use strcit';

// // declaring basik variables
// let x = new Date(),
//   second = x.getSeconds() * 6 + 90,
//   minute = x.getMinutes() * 6 + 90,
//   hour = x.getHours() * 6 + 90;

// //gotta set initial time
// // $(document).ready(() => {
// //   x = new Date();
// //   second = x.getSeconds() * 6 + 90;
// //   minute = x.getMinutes();
// //   hour = x.getHours() * 30 + 90;
// //   hour += (minute % 12) * 6;
// //   minute = minute * 6 + 90;
// //   $('.seconds').css('transform', `rotate(${second}deg)`);
// //   $('.minute').css('transform', `rotate(${minute}deg)`);
// //   $('.hour').css('transform', `rotate(${hour}deg)`);
// // });

// //second func(each 1s -- rotate 6deg)
// function seconds() {
//   x = new Date();
//   second = x.getSeconds() * 6 + 90;
//   $('.seconds').css('transform', `rotate(${second}deg)`);
// }
// //minute func(each 1m -- rotate 6g)
// function minutes() {
//   x = new Date();
//   minute = x.getMinutes() * 6 + 90;
//   $('.minute').css('transform', `rotate(${minute}deg)`);
// }
// //hour func(each 12m -- rotate 6deg)
// function hours() {
//   x = new Date();
//   hour = x.getHours() * 30 + 90;
//   $('.hour').css('transform', `rotate(${hour}deg)`);
// }
// //actual functioning
// setInterval(seconds, 1000);
// setInterval(minutes, 60000);
// setInterval(hours, 720000);

// Optimized code

function go() {
  let x = new Date();
  let h = x.getHours() * 30 + 90;
  let m = x.getMinutes();
  let s = x.getSeconds() * 6 + 90;
  h += (m % 12) * 6;
  m = m * 6 + 90;
  $('.seconds').css('transform', `rotate(${s}deg)`);
  $('.hour').css('transform', `rotate(${h}deg)`);
  $('.minute').css('transform', `rotate(${m}deg)`);
}

setInterval(go, 1000);
