function lowerCaseDrivers (array) {
  return array.map(function (names) {
    return names.toLowerCase();
  })
};

function nameToAttributes (names) {
  return names.map(function (name) {
    const splitNames = name.split(" ");
    console.log (name.firstName = splitNames[0]);
    console.log (name.lastName = splitNames[1]);
    console.log (`${name.firstName} ${name.lastName}`);
  })
};
