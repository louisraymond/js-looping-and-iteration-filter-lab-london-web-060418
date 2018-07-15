// Code you

function findMatching(drivers, string){
    return drivers.filter( function (drivername){
      return drivername.toLowercase() === string.toLowercase
    })
}

funtion fuzzyMatch(drivers,string){
  return drivers.filter( function(drivername){
    return driver.name[1]==string[1]
  })
}