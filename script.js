// Countdown Timer for Tournament Start
const tournamentDate = new Date("May 15, 2025 10:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const timeLeft = tournamentDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "Tournament Started!";
    }
}, 1000);