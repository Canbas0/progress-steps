prevBtn = document.querySelector('#prev');
nextBtn = document.querySelector('#next');
allCircles = document.querySelectorAll('.circle');
progressDiv = document.querySelector('.progress');


currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive += 1;

    if (currentActive > allCircles.lenght) {
        currentActive = allCircles.lenght;
    }

    update();
});

prevBtn.addEventListener('click', () => {
    currentActive -= 1;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})


const update = () => {
    allCircles.forEach((circle, index) => {
        if (index < currentActive) {

            circle.classList.add('active');

        }
        else {

            circle.classList.remove('active');

        }
    });

    const actives = document.querySelectorAll('.active');

    progressDiv.style.width = ((actives.length - 1) / (allCircles.length - 1)) * 100 + "%"; 

    // 
    if (actives.length == 1) {
        prevBtn.disabled = true;
    } else if (actives.length == 4) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}