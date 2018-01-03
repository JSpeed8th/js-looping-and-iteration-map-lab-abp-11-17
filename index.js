function lowerCaseDrivers (array) {
  return array.map(function (names) {
    return names.toLowerCase();
  })
};

function nameToAttributes (names) {
  return names.map(function (name) {
    let firstHalf = name.split(" ")[0];
    let lastHalf = name.split(" ")[1];
    return {firstName: firstHalf, lastName: lastHalf};
  })
};
