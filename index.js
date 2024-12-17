// Code your solution here

// Function 1: Case insensitive match
function findMatching(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function 2: Match names that start with a specific string
  function fuzzyMatch(drivers, query) {
    return drivers.filter((driver) => driver.startsWith(query));
  }
  
  // Function 3: Match driver objects with a specific name
  function matchName(drivers, query) {
    return drivers.filter((driver) => driver.name === query);
  }
  
