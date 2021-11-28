var counters = document.querySelectorAll('.counter');
var speed = 600;//thời gian chạy
var delay = 60;
console.log(counters)
counters.forEach(counter => {
    var target = +counter.getAttribute('data-target');
    const updateCount = () => {
        const count = +counter.innerText;
        const increment = target * delay / speed;
        if (count < target) {
            counter.innerText = count + increment ; 
            setTimeout(updateCount,delay);
        }
        else {
            counter.innerHTML = target;
        }
    }
    setTimeout(()=>{
         updateCount();
    },delay)
})