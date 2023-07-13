const myCountry = {
    country:'Germany',
    capital:'Berlin',
    language:'Dutch',
    population: '24000000',
    neighbors: ['Holland', 'France'],

    describe(){
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbors.length} countries and a capital called Helsinki`);
    },

    checkIsland(){
        this.isIsland = !!this.neighbors.length 
        console.log(this.isIsland);
    }

    
}
myCountry.describe();
myCountry.checkIsland();



