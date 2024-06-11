//

function sumOfPolygon(n) {
  if (n < 3) {
    return "A polygon must have at least 3 sides";
  }
  return (n - 2) * 180;
}

console.log(sumOfPolygon(3));
console.log(sumOfPolygon(4));
console.log(sumOfPolygon(6));

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function calculateBasketBallPoints(twoPointer, threePointer) {
  const totalPoint = twoPointer * 2 + threePointer * 3;
  return totalPoint;
}

console.log(calculateBasketBallPoints(1, 1));
console.log(calculateBasketBallPoints(7, 5));

function nameString(name) {
  const result = name + "Edabit";
  return result;
}

console.log(nameString("Minar"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));

function lessThan100(one, two) {
  if (one + two < 100) {
    return true;
  } else {
    return false;
  }
}

console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

function swap(a, b) {
  return [b, a];
}

console.log(swap(100, 200));
console.log(swap(3, 4));

function animals(chickens, cows, pigs) {
  const totalLegs = chickens * 2 + cows * 4 + pigs * 4;
  return totalLegs;
}

console.log(animals(2, 3, 5));


// Buggy code 