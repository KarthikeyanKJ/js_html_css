const hrHand = document.querySelector('.hr-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

setInterval(() => {

    const now = new Date();

    const sec = now.getSeconds();
    const sec_deg = ((sec / 60) * 360) + 90;
    secHand.style['transform'] = `rotate(${sec_deg}deg)`;

    const min = now.getMinutes();
    const min_deg = ((min / 60) * 360) + ((sec / 60) * 6) + 90;
    minHand.style['transform'] = `rotate(${min_deg}deg)`;

    const hr = now.getHours();
    const hr_deg = ((hr / 12) * 360) + ((min / 60) * 30) + 90;
    hrHand.style['transform'] = `rotate(${hr_deg}deg)`; 
});