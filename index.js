function lowerCaseDrivers (array) {
  return array.map(function (names) {
    return names.toLowerCase();
  })
};

function nameToAttributes (names) {
  return names.map(function (name) {
    const splitNames = name.split(" ");
    const firstHalf = name.split(" ")[0];
    const lastHalf = name.split(" ")[1];
    return {firstName: firstHalf, lastName: lastHalf};
  })
};
