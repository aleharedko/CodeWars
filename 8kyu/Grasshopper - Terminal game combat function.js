//Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

//solution

function combat(health, damage) {
    let afertHits = health
    if (afertHits > 0 && afertHits > damage) {
        afertHits = afertHits - damage
    } else {
        afertHits = 0
    }
    return afertHits
}

let personStatt = combat(20, 20);
console.log(personStatt);
