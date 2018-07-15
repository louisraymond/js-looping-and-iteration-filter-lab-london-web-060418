// Code you

function findMatching(drivers, string){
    return drivers.filter( function (drivername){
      return drivername.toLowerCase() === string.toLowerCase()
    })
}


function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName(drivers, string){
  return drivers.filter(function(drivername){
    driver.name.toUpperCase==string.toUpperCase
  })
}