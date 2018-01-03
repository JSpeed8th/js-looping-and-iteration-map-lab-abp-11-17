function lowerCaseDrivers (array) {
  return array.map(function (names) {
    return names.toLowerCase();
  })
};

function nameToAttributes (names) {
  return names.map(function (name) {
    const splitNames = name.split(" ");
    return names["firstName"] = splitNames[0];
    name.lastName = splitNames[1]
    return `${driver.FirstName} ${driver.lastName}`;
  })
};
