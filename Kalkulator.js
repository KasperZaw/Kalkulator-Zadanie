// okay so we have c its character, we had empty function lexer  that  didn't return anything before so we were getting undefined. Now we add if statment, if we got undefined
// we getting type EOF end of file , so we showing the program hey stop reading its finished there is nothing more.
// * after function make function a genarator
// The yield keyword is used to define a generator function, which is a special kind of function that can be used to produce a sequence of values on demand..
const input = "7";

function* lexer(str){
   
    let c = str[0]

   if(c === undefined) {
      yield {  type: 'EOF' }
   }
}

console.log(lexer(input))


