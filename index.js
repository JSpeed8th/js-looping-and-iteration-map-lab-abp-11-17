function lowerCaseDrivers (array) {
  return array.map(function (names) {
    return names.toLowerCase();
  })
};

function nameToAttributes (names) {
  return names.map(function (name) {
    const splitNames = name.split(" ");
    const firstHalf = splitNames[0];
    const lastHalf = splitNames[1];
    name.firstName= firstHalf;
    name.lastName = lastHalf;
    return Object.assign(name, {name.firstName, name.lastName} );
  })
};
