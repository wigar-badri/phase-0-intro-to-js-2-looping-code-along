// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}
wrapGifts(gifts);

function writeCards(names, eventName) {
    const messages = []; // Create an empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      // Iterate through the input array
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`; // Build the 'thank you' message using string interpolation
      messages.push(message); // Add the message to the messages array
    }
  
    return messages; // Return the new array with all the messages
  }
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }