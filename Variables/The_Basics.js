// var smsSendingLimit;
// var hasPermission;
// var username;
// var nothing;

// don't touch below this line
// console.log(`smsSendingLimit is a `, typeof smsSendingLimit);
// console.log(`hasPermission is a `, typeof hasPermission);
// console.log(`username is a `, typeof username);
// console.log(`nothing is a `, typeof nothing);

/*
smsSendingLimit is a  undefined
hasPermission is a  undefined
username is a  undefined
nothing is a  undefined
 */

/*
The big problem with var is that it's function-scoped,
not block-scoped, which leads to unexpected behaviour 
*/

// if (true) {
//     var mySkillIssues = 42;
// } 
// console.log(mySkillIssues); // 42

// var messageText = `Welcome to Textio!`;
// var isBirthday = true;

// if (isBirthday) {
//     var messageText = `Happy Birthday!`;

//     console.log(`sending birthday message...`);
//     console.log(`messageText: `, messageText);
// }
//         console.log(`sending welcome message...`);
//         console.log(`messageText: `, messageText);

// // Declaring Variables

// let smsSendingLimit = 20;
// let hasPermission = false;
// let username = `wasim-17`;
// let nothing;

// // don't touch below this line
// console.log(`smsSendingLimit is a `, typeof smsSendingLimit);
// console.log(`hasPermission is a `, typeof hasPermission);
// console.log(`username is a `, typeof username);
// console.log(`nothing is a `, typeof nothing);

// /*
// smsSendingLimit is a  number
// hasPermission is a  boolean
// username is a  string
// nothing is a  undefined
//  */


const messageText = `Welcome to Textio`;
let isBirthday = true;

if (isBirthday) {
    const messageText = `Happy Birthday!`;
    console.log(`sending birthday message...`);
    console.log(`messageText: `, messageText);
}

        console.log(`sending welcome message...`);
        console.log(`messageText: `, messageText);