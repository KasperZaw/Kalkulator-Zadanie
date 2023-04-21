// okay so we have c its character, we had empty function lexer  that  didn't return anything before so we were getting undefined. Now we add if statment, if we got undefined
// we getting type EOF end of file , so we showing the program hey stop reading its finished there is nothing more.
// * after function make function a genarator
// The yield keyword is used to define a generator function, which is a special kind of function that can be used to produce a sequence of values on demand..
// !!! note for me to final project str.split('')[0].match(/sadasd/) <- regular expresion
/*
const input = "777";

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
        loc: {        // loc is location
            begin: cursor,
            end: cursor + 1,
        }
      }
    } else {
        throw new Error(`unexpected character ${c} at ${cursor+1}`) // we adding 1 because we started from position 0 now we have error and we informing the user where the exact error occurs
    }
  }
}

console.log("start");
// we looking for token inside input when we find it we consolelog that token in this example it will be type number value 7
for (const token of lexer(input)) {
  console.log(token);
}

console.log("finish");
*/
const input = "777";

function* lexer(str) {
    let cursor = 0;
    let char = undefined;

    function number() {
        let value = "";
        for (; cursor <= str.length; cursor++) {
            char = str[cursor]
            if(char === '7') { // if character is 7 we save it to the value
                value += char;
            } else {
                break;
            }
        }
     
        if(value.length >= 1) {
            return {
                type: 'number',
                value,
            }
        }

        return null;
    }

    function eof() {
        char = str[cursor]
        cursor++
        if (char === undefined) {
            return { 
                type: "EOF" 
            };
        }

        return null
    }

    for (;; ) { // sprawdzic
        const token = number() || eof() || null;

        if(token) {
            yield token;

            if(token.type === 'EOF') {
                break;
            }
        } else {
            throw new SyntaxError(
                `unexpected character ${char} at ${cursor + 1}`
            )
        }
    }
}

console.log("start");
for (const token of lexer(input)) {
    console.log(token);
  }
console.log("finish");

