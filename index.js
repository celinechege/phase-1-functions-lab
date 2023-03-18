// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42;
    if (location < hq) {
      return hq - location;
    } else {
      return location - hq;
    }
  }

  function distanceFromHqInFeet(location) {
    const blockInFeet = 264;
    return distanceFromHqInBlocks(location) * blockInFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264; // 1 block is 264 feet
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * blockLength;
    return distanceInFeet;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 ) {
      return 25;
    } else if (distance > 2500){
      return 'cannot travel that far';
    }
  }
  