function superbowlWin(array1){ 
    let winning =  array1.find((winner) => winner["result"] === 'W')
    if (winning)
    {
        return winning.year
    }
    else {
        return undefined;
    }}