#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollars
let myPin = 1234;

let pinAnswer = await inquirer.prompt(

    [
        {
            name: "pin",
            message: "enter your pin number",
            type: "number",
        }


    ]
);
if(pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select option",
                type:"list",
                choices:["withdraw", "check balance", "fast cash"],
            }
        ]
    );
   // console.log(operationAns);

    
    if(operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt(
                [
                    {
                       name:"amount",
                       message:"enter your amount",
                       type:"number", 

                    }
                ]
            )
            if(amountAns.amount > myBalance){
                console.log("Insufficient Balance");
            }
            else{
            myBalance -= amountAns.amount;

            console.log(`${amountAns.amount} With draw Succesfully`);
            console.log(`Your Remaining Balance is : ${myBalance}`);
        }
        }
     if(operationAns.operation === "fastcash"){
        let fastAns = await inquirer.prompt(
            [
                {
                    name: "fast cash",
                    message: "enter your amount",
                    type: "number",
                    choices: ["1000", "3000","5000","10000",]

                        
                    

                }
            ]
        )
        myBalance -= fastAns.fastcash;
        console.log("Your remaining balance is " + myBalance);
    }
        
              
                
            
    
    
    


            else if(operationAns.operation === "check balance"){
                console.log(`Your Balance is : ${myBalance}`);
            }

        
    
}
else{
    console.log("incorrect pin code");
}
