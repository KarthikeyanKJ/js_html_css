var hour = document.querySelector('.hour');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
var prehand = document.querySelector('.prehand');

setInterval(()=>{
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hour.innerHTML = (hh > 12) ? ((hh - 12) >= 10 ? (hh - 12) : ('0' + (hh - 12))) : (hh >= 10 ? hh : ('0' + hh));
    min.innerHTML = mm >= 10 ? mm : '0' + mm;
    sec.innerHTML = ss >= 10 ? ss : '0' + ss;
    prehand.innerHTML = hh >= 12 ? 'pm' : 'am';
})
