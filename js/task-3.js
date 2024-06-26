//Spam control function
console.log("Task 3: Spam control function");
function checkForSpam(message) {
  'use strict';
  // Write code under this line
  const msginput = message.toLowerCase();
  if (msginput.includes('spam') || msginput.includes('sale')) {
    return true;
  }
    return false;
}

//Tests
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
