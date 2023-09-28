function sleepIn(weekday, vacation) {
  //solve 1
  if (vacation === true) {
    return true;
  } else {
    if (weekday === false) {
      return true;
    } else {
      return false;
    }
  }
}

function sleepIn(weekday, vacation) {
  /*solve 2        */
  if (vacation === true || weekday === false) {
    return true;
  } else {
    return false;
  }
}

function monkeyTrouble(aSmile, bSmile) {
  return aSmile === bSmile;

  /* if (aSmile === bSmile) {
      return true
    } else {
      return false
    } */

  /* return aSmile && bSmile || !aSmile && !bSmile */

  /* if (aSmile && bSmile || !aSmile && !bSmile) {
      return true
    } else {
      return false
    } */

  /* if (aSmile === true && bSmile === true || aSmile === false && bSmile === false) {
      return true
    } else {
      return false
    } */

  /* if (aSmile === true && bSmile === true) {
      return true
    } else if (aSmile === false && bSmile === false) {
      return true
    } else {
      return false
    } */

  /* if (aSmile === true) {
      if (bSmile === true) {
        return true
      } else {
        return false
      }
    } else {
      if (bSmile !== true) {
        return true
      } else {
        return false
      }
    } */
}
