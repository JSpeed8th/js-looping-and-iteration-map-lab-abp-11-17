function lowerCaseDrivers (array) {
  return array.map(function (names) {
    return names.toLowerCase();
  })
};

function nameToAttributes (names) {
  return names.map(function (name) {
    const splitNames = name.split(" ");
    const firstName = splitNames[0];
    const lastName = splitNames[1]
    return `${firstName} ${lastName}`;
  })
};