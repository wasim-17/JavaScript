// let x = 2; // this is a number
// x = 5.69; // this is also a number
// x = -5.69; // yup, still a number

// // You can do arithmetic as you'd expect:

// let sum = 2 + 3 + 7; // 12
// let difference = 5.3 - 2.1; // 3.1999999999999997
// let product = 3 * 6; // 18
// let quotient = 6 / 2; //  3


// console.log(`sum: `, sum);
// console.log(`differendce: `, difference);
// console.log(`product: `, product);
// console.log(`quotient: `, quotient);

// const promoMessages = 12;
// const remainderMessages = 8;
// const welcomerMessages = 15;
// const supportMessages = 5;

// const totalMessagesSent = promoMessages + remainderMessages + welcomerMessages + supportMessages;
// const averageMessagesSent = totalMessagesSent / 4;

// console.log(`Total messages: `, totalMessagesSent);
// console.log(`Average messages: `, averageMessagesSent);

// let numFailedMessages = 1336;

// numFailedMessages++;
// console.log(numFailedMessages + ` failed messages`);


// // you code here
// // undefined variables
// let sentMessages;
// let deliveredMessages;
// let failedMessages;

// console.log(`Sent is: `, sentMessages);
// console.log(`Delivered is: `, sentMessages);
// console.log(`Failed is: `, sentMessages);


// // Null vs. undefined

// let sentMessages;
// let deliveredMessages;
// let failedMessages;

// console.log(`Sent is null:`, sentMessages === null);
// console.log(`Delivered is null:`, sentMessages === null);
// console.log(`Failed is null:`, sentMessages === null);

// let sentMessages = null;
// let deliveredMessages = null;
// let failedMessages = null;

// console.log(`Sent is null:`, sentMessages === null);
// console.log(`Delivered is null:`, sentMessages === null);
// console.log(`Failed is null:`, sentMessages === null);

// /*
// Sent is null: true
// Delivered is null: true
// Failed is null: true
// */

// Dynamic and Weak

// let totalSentMessages = 100;
// let totalReceivedMessages = '50';

// const totalmessages = totalSentMessages + totalReceivedMessages;

// console.log(`Total sent messages:`, totalSentMessages);
// console.log(`Total received messages:`, totalReceivedMessages);
// console.log(`Total messages:`, totalmessages); // 10050


let totalSentMessages = 100;
let totalReceivedMessages = 50;

const totalmessages = totalSentMessages + totalReceivedMessages;

console.log(`Total sent messages:`, totalSentMessages);
console.log(`Total received messages:`, totalReceivedMessages);
console.log(`Total messages:`, totalmessages); // 150
