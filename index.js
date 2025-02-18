// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    const newDrivers = {...driver};
    
    newDrivers[key] = value;

    return newDrivers;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
     driver[key] = value;

     return driver;
}

function deleteFromDriverByKey(driver, key){
    const newDrivers = {...driver};

    delete newDrivers[key];

    return newDrivers;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];

    return driver;
}