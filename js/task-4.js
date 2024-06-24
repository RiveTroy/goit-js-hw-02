//Delivery cost calculator
console.log("Task 4: Delivery cost calculator");
function getShippingCost(country) {
  let message = `Shipping to  ${country} will cost `;
  switch (country) {
    case "China":
      return message + "100 credits";
    case "Chile":
      return message + "250 credits";
    case "Australia":
      return message + "170 credits";
    case "Jamaica":
      return message + "120 credits";
    default:
      return "Sorry, there is no delivery to your country";
  }
}

//Tests
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
