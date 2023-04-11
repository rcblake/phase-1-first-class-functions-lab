const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2)

const returnLastTwoDrivers = (drivers) => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]



function createFareMultiplier(multiplier) {
    return function fareMultiplier(fare) {
        return fare*multiplier
    }
}

function fareDoubler(fare) {
    return fare*2
}

function fareTripler (fare) {
    return fare*3
}

function selectDifferentDrivers (drivers,driverPairs) {
    if (driverPairs === returnFirstTwoDrivers) {
        return drivers.slice(0,2)
    } else if (driverPairs === returnLastTwoDrivers) {
        return drivers.slice(-2)
    }
}
