function lowerCaseDrivers (array) {
  return array.map(function (names) {
    return names.toLowerCase();
  })
};

function nameToAttributes (names) {
  return names.map(function (name) {
    const splitNames = name.split(" ");
    return name.firstName = splitNames[0];
    console.log (name.firstName = splitNames[1]);
  })
};
