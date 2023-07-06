function countryInfo(country, population, capitalCity){
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const countryNumber1 =  countryInfo("Israel", 6, "Jerusalem");
const countryNumber2 =countryInfo("Russia", 50, "Moscow");
const countryNumber3 = countryInfo("Egypt", 25, "cairo");

console.log(countryNumber1);
console.log(countryNumber2);
console.log(countryNumber3);