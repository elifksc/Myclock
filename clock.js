let Name = prompt("Lutfen isminizi giriniz: ");
let myName = document.querySelector("#myName");

myName.innerHTML = `${Name}`;
/*
function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.querySelector("#myClock").innerHTML = date;
}

// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 
myClock.innerHTML = `${date}`;
*/

function showTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  let d = new Date();
  var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector("#myClock").innerHTML =  h + ":" + m + ":" + s + " " + gunler[d.getDay()];
  setTimeout(showTime, 1000);
  
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
showTime();