const returnFirstTwoDrivers = function(drivers){
return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(driversTwo){
    return driversTwo.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = function(multiply){
    return function(value){
        return multiply * value
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (drivers, driversToReturn){
    return driversToReturn(drivers)
}