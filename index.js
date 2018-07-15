// Code you

function findMatching(drivers, string){
    return drivers.filter( function (drivername){
      return drivername.toLowercase() === string.toLowercase
    })
}

funtion fuzzyMatch(drivers,)