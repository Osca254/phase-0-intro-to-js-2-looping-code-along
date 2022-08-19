// Code your solutions in this file
let myNames = ["Guadalupe", "Ollie", "Aki"]
let message = "surprise"
// let arrayMessages = [];
// function writeCards(myNames, message){
//   for(let i = 0; i < myNames.length; i++){
//   let messages= (`Thank you, ${myNames[i]}, for the wonderful ${message} gift!`);
//   arrayMessages.push(messages);
//   }
//   console.log(arrayMessages);
//   return arrayMessages;
// }
// writeCards(myNames,message);
function writeCards(myName,message){
    let messages=[]
    for(let i=0;i<myName.length;i++){
        messages.push(`Thank you, ${myName[i]}, for the wonderful ${message} gift!`)
    }
    console.log(messages)
     return messages
}
writeCards(myNames, message);

function countDown(number){
for(let i = number; i >= 0; i--){
console.log(i)
}
}
countDown(10);