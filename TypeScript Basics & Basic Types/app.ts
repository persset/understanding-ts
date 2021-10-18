let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): void {
  throw { message: message, errorCode: code };
  // while(true) {}
}

const result = generateError("An error ocurred!", 500);
console.log(result);
