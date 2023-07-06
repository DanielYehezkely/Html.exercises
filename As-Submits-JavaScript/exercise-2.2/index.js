function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
    return `You will be a ${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} children`
}

const destinyOption1 = tellFortune("Food-taster", "France", "Scarlet", 4);
const destinyOption2 = tellFortune("Surfer", "Mexico", "Renata", 8);
const destinyOption3 = tellFortune("Couch-Potato", "Israel", "Sima", 3);

console.log(destinyOption1);
console.log(destinyOption2);
console.log(destinyOption3);