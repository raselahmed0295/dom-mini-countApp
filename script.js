let count = 0;
function countDownApp() {
    const increaseBtn = document.getElementById('count');
    count += 1;
    increaseBtn.innerText = count;
    if (count > 0) {
        increaseBtn.style.color = 'green';
    }
}
document.getElementById('decrease').addEventListener("click", function () {
    
    const decreases = document.getElementById('count');
    count--;
    decreases.innerText = count;
    if (count < 0) {
        decreases.style.color = 'red'; 
    }
})