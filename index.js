function superbowlWin(record){ 
   let found = record.find(property =>{return property.result === "W"} )
    if (found){
        return found.year
    } else {
        return undefined
    }

}
