function reassignment (number) {
  return number >= 2 ? number + 7 : number;
};

function reassignmentInConditional (number) {
  return number + 7;
};

function reassignmentNestedInConditional (numberX, numberY) {
  const newX = numberX + 7;
  if (numberX > 1000) {
    return numberX;
  } else if (newX >= 9) {
    return newX;
  } else {
    return numberY;
  }
}

module.exports = {
  reassignment,
  reassignmentInConditional,
  reassignmentNestedInConditional
};
