// okay so we have c its character, we had empty function lexer  that  didn't return anything before so we were getting undefined. Now we add if statment, if we got undefined
// we getting type EOF end of file , so we showing the program hey stop reading its finished there is nothing more.
// * after function make function a genarator
// The yield keyword is used to define a generator function, which is a special kind of function that can be used to produce a sequence of values on demand..
// !!! note for me to final project str.split('')[0].match(/sadasd/) <- regular expresion
const input = "7777";

function* lexer(str) {
  // looping through string and tracking current position in string
    for (let cursor = 0; cursor <= str.length; cursor++) {
    const c = str[cursor];
    if (c === undefined) {
      yield { type: "EOF" };
    } else if (c === '7') {
      yield {
        type: "number",
        value: 7,
      }
    }
  }
}

console.log("start");
// we looking for token inside input when we find it we consolelog that token in this example it will be type number value 7
for (const token of lexer(input)) {
  console.log(token);
}

console.log("finish");
