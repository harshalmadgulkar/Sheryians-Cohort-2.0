// ! Debouncing is a technique that ensures a function is executed only after a certain amount of time has passed since the last time it was called.

function debounce(fn, delay) {
    let timer;  //persists across calls (closure)

    return function() {
        clearTimeout(timer);
        timer = setTimeout(fn, delay);
    };
}

document.querySelector("#search").addEventListener("input", debounce(function() {
    console.log("searched...");
}, 500));


// ! Throttling is a technique that ensures a function is executed at most once every fixed time interval, no matter how many times it is triggered.

function throttle(fn, delay) {
    let last = 0;

    return function() {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            fn();
        }
    };
}

window.addEventListener("mousemove", throttle(function() {
    console.log("mouse is moving");
}, 2000));

// ! json parse => json se object banaate ho
// ! json stringify => json banate ho