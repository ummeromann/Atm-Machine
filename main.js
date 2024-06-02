"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function startATMConversation() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("welcome to Islamic Bank!");
        const answers = yield inquirer_1.default.prompt([
            {
                type: "input",
                name: "userID",
                message: "kindly enter your user ID:"
            },
            {
                type: "number",
                name: "userPIN",
                message: "kindly enter your PIN:"
            },
            {
                type: "list",
                name: "accountType",
                choices: ["Current ", "Saving "],
                message: "Select your account type:"
            },
            {
                type: "list",
                name: "transactionType",
                choices: ["Fastcash withdrawal", "Normal withdrawal"],
                message: "Select your transactionType:",
            },
            {
                type: "list",
                name: "amount",
                choices: [1000, 2000, 5000, 10000, 20000],
                message: "Select your amount:",
                when(answers) {
                    return answers.transactionType === "Fastcash withdrawal";
                }
            },
            {
                type: "number",
                name: "amount",
                message: "Enter your amount:",
                when(answers) {
                    return answers.transactionType === "Normal withdrawal";
                }
            },
        ]);
        if (answers.userID && answers.userPIN) {
            console.log("processing your request...");
            const balance = Math.floor(Math.random() * 100000000);
            console.log("Your current balance is: PKR", balance.toLocaleString());
            const enteredAmount = answers.amount;
            if (balance >= enteredAmount) {
                const remainingBalance = balance - enteredAmount;
                console.log("transaction is successfull. your remaining balance is: PKR", remainingBalance.toLocaleString());
            }
            else {
                console.log("Insufficient balance. Please try again with a lower amount.");
            }
        }
    });
}
startATMConversation();
