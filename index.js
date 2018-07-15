// Code you

function findMatching(drivers, string){
    return drivers.filter( function (drivername){
      return drivername.toLowercase() === string.toLowercase
    })
}

function fuzzyMatch(drivers,string){
  let lengthOfName = string.length;
   return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  })
}

function 