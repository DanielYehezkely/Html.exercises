function colorIndicator(color){

    color = color.toLowerCase();

    switch (color){
        case 'pink' :
        case 'orange' :
        case 'yellow' : return 'light-color'
        case 'blue':
        case 'purple':
        case 'brown': return 'dark-color'
        default : return 'unknow-color'
    }
}

console.log(colorIndicator('Yellow'));