// okay so we have c its character, we had empty function lexer  that  didn't return anything before so we were getting undefined. Now we add if statment if we got undefined
// we getting type EOF end of file , so we showing the program hey stop reading its finished.

const input = "";

function lexer(str){
   let c = str[0]
   if(c === undefined) {
      return {  type: 'EOF' }
   }
}
console.log(lexer(input))
console.log('ok')

