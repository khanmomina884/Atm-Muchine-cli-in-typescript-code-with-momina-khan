 import inquirer from "inquirer";
 import chalk from "chalk"

 //initialization user balance and pin code : 
 let myBalance = 5000;
 let myPin = 1234;

 //print welcome message 
 console.log(chalk.blue('\n \tWelcome to Code With Momina - ATM Machine \n'));

 let pinANSWER = await inquirer.prompt([
{
name : 'pin',
type: 'number',
message: chalk.yellow('Enter Your Pin Code:')
}
 ])

if (pinANSWER.pin === myPin){
    console.log (chalk.green('Pin is Correct , Login Successfully.'));
    console.log(chalk.yellow(`Current Account Balance is ${myBalance} `))

let operationANS = await inquirer.prompt([{
name : "operation",
type :"list",
message :chalk.yellow("Select an Operation"),
choices: ["Withdraw Amount",'Check Balance']
}])

if(operationANS.operation=== "Withdraw Amount"){
    let withdrawANS = await inquirer.prompt([{

        name : "WithdrawMethod",
        type : "list",
        message :chalk.yellow('Select a Withdraw Method'),
        choices : ['Fast Cash','Enter Amount']
    }
])
if (withdrawANS.WithdrawMethod ==='Fast Cash'){
let FastCashANS = await inquirer.prompt([{

name : 'FastCash',
type: 'list',
message:chalk.yellow("Select Amount"),
choices :[1000, 2000, 5000, 10000, 20000, 50000,]


}])
if(FastCashANS.FastCash > myBalance){
    console.log (chalk.red('Insufficient Balance '));
}else{
myBalance -= FastCashANS.FastCash
console.log(`${FastCashANS.FastCash} Withdraw Sucessfully`);
console.log(chalk.yellow(`Your Remainig Balance is: ${myBalance}`));

}
}
else if(withdrawANS.WithdrawMethod=== "Enter Amount"){
    let amountANS = await inquirer.prompt([{

        name :"amount",
        type:"number",
        message:"Enter the amount to withdraw."
        
        }])
        
        if(amountANS.amount > myBalance ){
        console.log(chalk.yellow('Insufficient Balance'));
        }else {
            myBalance -= amountANS.amount;
            console.log(chalk.yellow(`${amountANS.amount}Withdraw Successfully`));
            console.log(`Your Remaing Balance is : ${myBalance}`);
        }
        }else if (operationANS.operation === "Check Balance"){
            console.log(`Your Account Balance is : ${myBalance}`)
        }
}

}else {
    console.log(chalk.red('Pin is Incorrect, Try Again'));
}