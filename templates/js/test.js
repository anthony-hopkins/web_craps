function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function die_roll() {
    var btn = document.getElementById("rollBtn");
    btn.innerHTML = "ROLLING...";
    btn.className = "disabled_button";
    let roll_one = Math.floor(Math.random() * (7 - 1) + 1);
    let roll_two = Math.floor(Math.random() * (7 - 1) + 1);
    let i;
    for (i = 0; i < 15; i++) {
        await sleep(100);
        let roll_one = Math.floor(Math.random() * (7 - 1) + 1);
        let roll_two = Math.floor(Math.random() * (7 - 1) + 1);
        document.getElementById("die_one").src = "/images/dice-png-".concat(roll_one).concat(".png");
        document.getElementById("die_two").src = "/images/dice-png-".concat(roll_two).concat(".png");
    }
    btn.className = "rollButton";
    btn.innerHTML = "Roll Craps!"
}