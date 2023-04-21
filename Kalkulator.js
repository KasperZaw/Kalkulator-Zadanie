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
const input = "123456789  22  33";

function* lexer(str) {
    let cursor = 0;
    let char = str[cursor];

    function next() {
        cursor++;
        char = str[cursor];
    }

    function number() {
        let buffer = "";
        while (/^\d$/.test(char)) {
            buffer += char;
            next()
        }
     
        if(buffer.length >= 1) {
            return {
                type: 'number',
                value: buffer,
            }
        }

        return null;
    }

    function whitespace() {
        let buffer = ""
        while(char === " ") {
            buffer += char;
            next()
        }
        if(buffer.length >= 1) {
            return {
                type: "whitespace",
                value: buffer,
            }
        }
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

    for (;; ) { // sprawdzic this is równowartość to this while(true)
        const token = number() || whitespace() || eof(); // features are arranged by frequency of use

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
for (const token of lexer(input)) { // console.log([...lexer(input)])
    console.log(token);
  }
console.log("finish");

