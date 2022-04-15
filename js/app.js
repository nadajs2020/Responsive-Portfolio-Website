/* --------------- Grab elements from DOM --------------- */
const header = document.querySelector("header");
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

const prt_section = document.querySelector(".portfolio");
const zoom_icon = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");

window.addEventListener("scroll", () => {
    if (!skillsPlayed) skillsCounter();
    if (!mlplayed) mlCounters();
});
/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar);
/* --------------- Reveal Animation --------------- */
let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});
sr.reveal(".showcase-info", {
    delay: 600
});
sr.reveal(".showcase-image", {
    origin: "top",
    delay: 700
});

/* --------------- Skills Progress Bar Animation --------------- */
function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

function updateCount(num, maxNum) {
    var currentNum = +num.innerText;
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

var skillsPlayed = false;

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        var target = +counter.dataset.target;
        var strokValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400);
    });

    progress_bars.forEach(
        (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
}
/* --------------- Services Counter Animation --------------- */

var mlplayed = false;

function mlCounters() {
    if (!hasReached(ml_section)) return;
    mlplayed = true;
    ml_counters.forEach((ctr) => {
        var target = +ctr.dataset.target;
        setTimeout(() => {
            updateCount(ctr, target);
        }, 400);
    });
}
/* --------------- Portfolio Filter Animation --------------- */
var mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: ".prt-card",
    },
    animation: {
        duration: 500,
    },
});
/* --------------- Modal Pop Up Animation Animation --------------- */
zoom_icon.forEach((icn) =>
    icn.addEventListener("click", () => {
        prt_section.classList.add("open");
        document.body.classList.add("stopScrolling");
    })
);


modal_overlay.addEventListener("click", () =>
    prt_section.classList.remove("open"));
/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */