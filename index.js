// solution does not work either so I'm convinced this lab is broke

function distanceFromHqInBlocks (blockNumber) {
    if (blockNumber > 42) {
      return blockNumber - 42;
    } else {
      return 42 - blockNumber;
    }
  }
  
  function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
  
  function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  
  function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }

// I'm like 95% sure this works but this lab is ugly and does not like my code >:(

// function distanceFromHqInBlocks(distance) {
//     if (distance > 42) {
//         return distance - 42;
//     } else if (distance < 42) {
//         return 42 - distance;
//     }
// }

// function distanceFromHqInFeet(distance) {
//     return distanceFromHqInBlocks(distance) * 264;
// }

// function distanceTravelledInFeet(num1, num2) {
//     let distanceTravelled;
//     if (num1 > num2) {
//         distanceTravelled = num1 - num2;
//     } else {
//         distanceTravelled = num2 - num1;
//     }
//     distanceFromHqInFeet(distanceTravelled);
// }

// function CalculatesFairPrice(start, end) {
//     let feet = distanceTravelledInFeet(start, end);
//     let fare = 0;
//     if (feet > 2500) {
//         return 'cannot travel that far';
//     } else if (feet > 2000) {
//         fare = 25;
//         return fare;
//     } else if (feet > 400) {
//         fare = (feet - 400) * 0.02;
//         return fare
//     } else if (feet < 400) {
//         fare = 0;
//         return fare;
//     }
// }