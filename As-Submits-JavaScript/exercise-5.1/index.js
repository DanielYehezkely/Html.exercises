function countryToLiveIn(language, isIsland, population, country) {
    //  true                        true            true
    if(language === 'English' && !isIsland  && population < 50000000){
    console.log(`You should consider living in ${country}`);
    }
    else {
        console.log(`${country} does not meet your criteria` );
    }
}

countryToLiveIn('Chinese', true ,5067767677, 'China' );
countryToLiveIn('German', false ,3067766, 'Germany' );
countryToLiveIn('English', true ,24667677, 'Spain' );
countryToLiveIn('English', false , 34873, "usa")