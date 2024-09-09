

//for 24 hour format
// const time = document.getElementById('time');
// const timeFormate= document.getElementById('timeformate');

// document.addEventListener('DOMContentLoaded',() => {
//     setInterval(showTime, 1000);
// });

// const showTime = ()=> {
//     let date = new Date();
//     let hr = date.getHours();
//     let min = date.getMinutes();
//     let secs = date.getSeconds(); 
   
//     hr = hr<10 ? `0${hr}` : hr;  
//     min = min<10 ? `0${min}` : min;  
//     secs = secs<10 ? `0${secs}` : secs;
    
//     time.innerHTML = `${hr} : ${min} : ${secs}`;

//     timeFormate.innerHTML = hr > 12 ? "PM": "AM";
// }


//for  12-hour format
const time = document.getElementById('time');
const timeFormate = document.getElementById('timeformate');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();
    
    let am_pm = "AM";
    
    if (hr >= 12) {
        am_pm = "PM";
    }
    
    // Convert to 12-hour format
    hr = hr % 12;
    hr = hr!=0 ? hr : 12; // If hr becomes 0, set it to 12 (because 12-hour format doesn't have 0)

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    secs = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${min} : ${secs}`;
    timeFormate.innerHTML = am_pm;
};
