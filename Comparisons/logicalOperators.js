/**
 * and &&
 * or ||
 * not !
 */

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// console.log(!false); // true
// console.log(!true); // false


const hasHighOpenRate = true;
const isRecent = true;
const hasStrongReplyRate =  false;
const canBeResent = true;
const isFlaggedAsSpam = false;

const isHighEngagement = hasHighOpenRate && isRecent && (hasStrongReplyRate || canBeResent) && !isFlaggedAsSpam;

console.log(`The campain is high-engagement: ${isHighEngagement}`);